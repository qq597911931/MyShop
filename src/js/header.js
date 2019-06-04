$(function(){
    //验证登录&购物车添加
    
    var shopcar = 0;
    if (document.cookie != '') {
        $('nav .admin .login .username').html('您好:' +cookie.get('user_name'));
        if(cookie.get('product_id') == ''){
            shopcar = 0;
        }  else{
            var arr = cookie.get('product_id').split(',');
            shopcar = arr.length-1;
        }
    }
    $('nav .admin .nav-car .number').html(shopcar);


    $('nav .nav').on('mouseover',function(){
        $('nav .nav-left').addClass('show');
    }).on("mouseout",function(){
        $('nav .nav-left').removeClass('show');
    });


    $("nav .nav-left").on('mouseover',function(){
        $('nav .nav-left').addClass('show');
    }).on("mouseout",function(){
        $('nav .nav-left').removeClass('show');
    });

    $("nav .nav-left .nav-left-ul .nav-left-li").on('mouseover',function(){
        $('nav .nav-left').addClass('show-div');
        $(this).children('.nav-hide').addClass('show-li');
    }).on("mouseout",function(){
        $('nav .nav-left').removeClass('show-div');
        $(this).children('.nav-hide').removeClass('show-li');
    });


});