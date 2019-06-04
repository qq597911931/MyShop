$(function () {
    //表单验证
    const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const username = /^\w{6,16}$/;
    const phone = /^1[3-9]\d{9}$/;
    const password = /^\w{6,16}$/;
    var namepass, phonepass, emailpass, passwordpass;
    emailpass = true;
    $('#name').on('change', function () {
        $(this).removeClass('input-warning');
        hide();
        if (!username.test(this.value)) {
            show();
            namepass = false;
            $('main #error p').html('账号输入有误，为6-16位的数字，字母，下划线');
            $(this).addClass('input-warning');
        } else {
            namepass = true;
        }
    });
    $('#phonenumber').on('change', function () {
        $(this).removeClass('input-warning');
        hide();
        if (!phone.test(this.value)) {
            show();
            phonepass = false;
            $('main #error p').html('手机输入有误，请输入正确的手机号');
            $(this).addClass('input-warning');
        } else {
            phonepass = true;
        }
    });
    $('#email').on('change', function () {
        $(this).removeClass('input-warning');
        hide();
        if (!email.test(this.value)) {
            show();
            emailpass = false;
            $('main #error p').html('邮箱输入有误，请输入正确的邮箱');
            $(this).addClass('input-warning');
        } else {
            emailpass = true;
        }
    });
    $('#password').on('change', function () {
        $(this).removeClass('input-warning');
        hide();
        if (!password.test(this.value)) {
            show();
            passwordpass = false;
            $('main #error p').html('密码输入有误，为6-16位的数字，字母，下划线');
            $(this).addClass('input-warning');
        } else {
            passwordpass = true;
        }
    });

    //点击注册
    $('.continue-btn').on('click', function () {
        if (namepass && phonepass && emailpass && passwordpass) {

            $.ajax({
                type: "get",
                url: "../lib/register.php",
                data: { username: $('#name').val(), phonenumber: $('#phonenumber').val(), email: $('#email').val(), password: $('#password').val() },
                success: function (data) {

                    if (data == '注册成功') {
                        alert('登陆成功，点击跳转登录页');
                        location.href = 'login.html';
                    } else {
                        show();
                        $('main #error p').html(data + '，注册失败');
                    }

                }
            });

        } else {
            show();
            $('main #error p').html('请输入完整的个人信息');
        }
    });

    function show() {
        $('main #error').addClass('show');
    }
    function hide() {
        $('main #error').removeClass('show');
    }
});