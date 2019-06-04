$(function () {
    if (document.cookie == '') {
        location.href = 'login.html';
    }
    var shopcar = cookie.get('product_id');
    var shoparr = shopcar.split(',');

    console.log(shoparr);

    var sumnum = 0;
    var sumprice = 0;

    // $('#main-left .commodity-show .commodity-show-text')
    for (let i = 0; i < shoparr.length - 1; i++) {
        console.log(shoparr[i].split(':'));
        $.ajax({
            type: "get",
            url: "../lib/getproduct.php",
            data: { productid: shoparr[i].split(':')[0] },
            dataType: 'json',
            success: function (data) {
                // 购物车渲染
                $('#main-left').html(function () {
                    var newhtml = $('#main-left').html() + `
                    <div class="commodity-show">
                        <div class="commodity-show-text">
                            <img src="../img/${data.pic.split(';')[0]}" alt="">
                            <div>
                                <h5>${data.title}</h5>
                                <p>库存中仅剩<b>${data.num}</b>件。</p>
                                <a href="javascript:;">删除</a><a href="javascript:;">移入收藏夹</a>
                            </div>
                        </div>
                        <div class="commodity-show-price">
                            <h5>￥${data.price}</h5>
                        </div>
                        <div class="commodity-show-number">
                            <button class="del">-</button>
                            <input type="text" value="${shoparr[i].split(':')[1]}">
                            <button class="add">+</button></br>
                            <span>数量有误</span>
                        </div>
                    </div>  
                    `
                    return newhtml;
                });
                // 总价计算
                sumnum += Number(shoparr[i].split(':')[1]);
                sumprice += Number(data.price) * Number($('#main-left .commodity-show .commodity-show-number input:last').val());
                getsumprice(sumnum,sumprice);
                

                // 按钮数量加减
                $('#main-left .commodity-show .commodity-show-number .add').on('click', function () {
                    var inputnum = Number($(this).siblings('input').val())+1;
                    $(this).siblings('input').val(inputnum);
                    sumprice += ($(this).parents('.commodity-show').find('.commodity-show-price h5').html().slice(1)-0);
                    sumnum++ ;
                    getsumprice(sumnum,sumprice);
                });
                $('#main-left .commodity-show .commodity-show-number .del').on('click', function () {
                    var inputnum = Number($(this).siblings('input').val())-1;
                    $(this).siblings('input').val(inputnum);
                    sumprice -= ($(this).parents('.commodity-show').find('.commodity-show-price h5').html().slice(1)-0);
                    sumnum-- ;
                    getsumprice(sumnum,sumprice);
                });

                //购买页面
                $('#main-right .main-right-btn button').on('click', function () {
                    console.log(123)
                    cookie.set('product_id', '');
                    alert('购买完成，现在跳转至主页');
                    location.href='index.html';
                });

            }
        });
    }

    function getsumprice(num,price) {
        console.log();
        $('#main-right .main-right-btn .btn-title').html(`小计(${num}个商品):`);
        $('#main-right .main-right-btn .btn-price').html(`￥${price.toFixed(2)}`);
    }

});