$(function () {

    //放大镜
    var small = $('#main-left .main-introduce .main-img .small-img img');
    var movebox = $('#main-left .main-introduce .main-img .small-img div');
    var big = $('#main-left .main-introduce .main-img .big-img');
    var bigpic = $('#main-left .main-introduce .main-img .big-img img');
    small.on('mouseover', function () {
        big.css('display', 'block');
    });
    small.on('mousemove', function (ev) {
        //大图/小图的比例
        //bigpic/big = small/box
        var scale = bigpic.width() / small.width();

        movebox.css('width', small.width() * big.width() / bigpic.width() + 'px')
            .css('height', small.height() * big.height() / bigpic.height() + 'px')
            .css('display', 'block');
        ev = ev || event;

        var top = ev.offsetY - (movebox.height()) / 2;
        var left = ev.offsetX - (movebox.width()) / 2;

        if (top < 0) {
            top = 0;
        } else if (top > small.height() - movebox.height()) {
            top = small.height() - movebox.height();
        }
        if (left < 0) {
            left = 0;
        } else if (left > small.width() - movebox.width()) {
            left = small.width() - movebox.width();
        }

        movebox.css('top', top + 'px').css('left', left + 'px');

        bigpic.css('top', -top * scale + 'px').css('left', -left * scale + 'px');

    });
    small.on('mouseout', function () {
        big.css('display', 'none');
        movebox.css('display', 'none')
    });

    //展示商品
    var id = location.search.split('=');
    $.ajax({
        type: "get",
        url: "../lib/getproduct.php",
        data: { productid: id[1] },
        dataType: 'json',
        success: function (data) {
            console.log(data)
            //当前时间
            var date = new Date();
            //图片地址的数组
            let picarr = data.pic.split(';');
            //商品详情的数组
            let detaarr = data.details.split(';');
            //渲染
            $('#main-left .main-introduce .main-img .small-img img').attr("src", "../img/" + picarr[0]);
            $('#main-left .main-introduce .main-img .big-img img').attr("src", "../img/" + picarr[0]);

            $('#main-left .main-introduce .main-title').html(`
            <h3>${data.title}</h3>
            <div class="share">
                分享：<i></i><i></i><i></i><i></i>
            </div>
            <div class="horizon-line"></div>
            <p class="price">价格<span>￥${Number(data.price).toFixed(2)}</span></p>
            <p class="number">库存中剩余${data.num}件</p>
            <div class="time">送达日期：<span>后天(${date.getMonth() + 1}月${date.getDate() + 3}日)</span>
                <p>请即刻下单并选择“快递送货上门”。</p>
            </div>
            `);

            $('#main-left .main-minute table').html(function () {
                var newhtml = '';
                for (let i = 0; i < detaarr.length; i++) {
                    newhtml += `
                    <tr>
                        <td class="td-title">${detaarr[i].split('：')[0]}</td>
                        <td>${detaarr[i].split('：')[1]}</td>
                    </tr>
                    `
                }
                return newhtml;
            });

            $('#main-left .main-minute').html(function () {
                var newhtml = $('#main-left .main-minute').html();
                for (let i = 0; i < picarr.length; i++) {
                    newhtml += `
                    <img src="../img/${picarr[i]}" alt="">
                    `
                }
                return newhtml;
            });

            $('#main-right .main-right-btn .btn-repertory span').html(data.num);


            //购买数量事件绑定
            var inputnum = $('#main-right .main-right-btn .btn-number input');

            $('#main-right .main-right-btn .btn-number .del').on('click', function () {
                inputnum.val(Number(inputnum.val()) - 1);
                getprice(Number(inputnum.val()));
            });
            $('#main-right .main-right-btn .btn-number .add').on('click', function () {
                inputnum.val(Number(inputnum.val()) + 1);
                getprice(Number(inputnum.val()));
            });
            inputnum.on('change', function () {
                getprice(inputnum.val());
            });

            getprice(1);

            //实时价格 
            function getprice(buynum) {
                $('#main-right .main-right-btn .btn-price').html('￥' + (Number(data.price) * buynum).toFixed(2));
                if (buynum > data.num) {
                    $('#main-right .main-right-btn .btn-number span').css({ 'visibility': 'visible' });
                } else {
                    $('#main-right .main-right-btn .btn-number span').css({ 'visibility': 'hidden' });
                }
            }


            //加入购物车
            $('#main-right .main-right-btn .shopcar').on('click', function () {
                // cookie数据格式：id:数量,id:数量,id:数量;
                var shopcar = cookie.get('product_id');

                console.log(shopcar);

                if (document.cookie == '') {
                    alert('请登录');
                    location.href='login.html';    
                } else{
                    var arr = cookie.get('product_id').split(',');
                    if(arr.length == 1){
                        cookie.set('product_id', shopcar+data.id+':'+inputnum.val()+',');
                    }
                    let flog = true;
                    for(let i = 0;i<arr.length-1;i++){
                        if(arr[i].split(':')[0] == data.id){
                            let newnum = Number(arr[i].split(':')[1])+ Number(inputnum.val());
                            arr[i]=arr[i].split(':')[0]+':'+newnum;
                            flog = false;
                        } 
                    }
                    if(flog){
                        cookie.set('product_id', shopcar + data.id+':' + inputnum.val()+',');
                    }  else{
                        cookie.set('product_id', arr.join(','));
                    }

                    console.log(cookie.get('product_id'));
                    
                } 
            });

        }
    });

});