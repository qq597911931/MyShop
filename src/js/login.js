$(function () {
    //表单验证
    const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const username = /^\w{6,16}$/;
    const phone = /^1[3-9]\d{9}$/;
    const password = /^\w{6,16}$/;
    var type;
    var pass = false;
    $('#loginname').on('change', function () {
        hide();
        $(this).removeClass('warning');
        if (email.test(this.value)) {
            type = 'user_email';
        } else if (phone.test(this.value)) {
            type = 'user_phone';
        } else if (username.test(this.value)) {
            type = 'user_name';
        } else {
            show();
            type = "";
            $('main #error p').html('账号输入有误，为6-16位的数字，字母，下划线');
            $(this).addClass('warning');
        }
    });
    $('#password').on('change', function () {
        $(this).removeClass('warning');
        hide();
        if (!password.test(this.value)) {
            show();
            pass = false;
            $('main #error p').html('密码输入有误，为6-16位的数字，字母，下划线');
            $(this).addClass('warning');
        } else {
            pass = true;
        }
    });
    //登录事件
    $('.login-btn').on('click', function () {
        if (type != '' && pass == true) {
            $.ajax({
                type: "get",
                url: "../lib/login.php",
                data: { user: $('#loginname').val(), password: $('#password').val(), type: type },
                success: function (data) {
                    if(data == "密码错误，登录失败"){
                        show();
                        $('main #error p').html('账号或密码错误，登录失败');
                    } else{
                        console.log(JSON.parse(data).user_name);
                        console.log($('#remenber').prop("checked"));

                        if($('#remenber').prop("checked")){
                            //存储用户信息application

                        }   
                        //存储cookie
                        document.cookie = 'user_name = '+JSON.parse(data).user_name;
                        alert('登陆成功，点击跳转主页');
                        location.href='index.html';
                    }
                }
            });
        }  else{
            show();
            $('main #error p').html('请输入正确的账号密码方可登录');
        }
    });

    function show() {
        $('main #error').addClass('show');
    }
    function hide() {
        $('main #error').removeClass('show');
    }
});