$(function () {

    $("img.lazy").lazyload({effect: "fadeIn"});
    
    //轮播
    var banner = $('#banner .banner');
    var bannerimg = $('#banner .banner .banner-img img');
    var bannerLeft = $('#banner .banner .banner-left');
    var bannerRight = $('#banner .banner .banner-right');
    var bannerBottom = $('#banner .banner .banner-bottom');
    var bannerLi = $('#banner .banner .banner-bottom li');
    //下端缩略图隐藏
    banner.on('mouseenter', function () {
        bannerBottom.animate({
            'height': "+=65"
        }, 200);
    }).on("mouseleave", function () {
        bannerBottom.animate({
            'height': "-=65"
        }, 200);
    });
    //缩略图更改图片
    bannerLi.on('mouseover', function () {
        change($(this).index());
    });
    //下一个按钮
    bannerRight.on('click', function () {
        getNext(getindex());
    });
    //上一个按钮
    bannerLeft.on('click', function () {
        getPrevious(getindex());
    });
    setInterval(function () {
        getNext(getindex());
    }, 3000);


    // 下一个
    function getNext(oldindex) {
        if (oldindex == 7) {
            oldindex = -1;
        }
        change(oldindex + 1, oldindex);
    }
    //上一个
    function getPrevious(oldindex) {
        if (oldindex == 0) {
            oldindex = 8;
        }
        change(oldindex - 1, oldindex);
    }
    //轮播动画
    function change(index, oldindex) {
        // bannerimg.css("opacity",0)
        oldindex = getindex();
        //轮播图动画
        $(bannerimg.eq(oldindex)).animate({
            'opacity': "0"
        }, 300);
        $(bannerimg.eq(index)).animate({
            'opacity': "1"
        }, 300);
        //li动画
        bannerLi.removeClass('li-show');
        bannerLi.eq(index).addClass('li-show');
    };
    //得到当前显示的下标
    function getindex() {
        var oldindex = i;
        for (var i = 0; i <= bannerimg.length; i++) {
            if (bannerimg.eq(i).css("opacity") == "1") {
                oldindex = i;
            }
        }
        return oldindex;
    };




    //得到数据库数据
    $.ajax({
        type: "post",
        url: "../lib/getallproduct.php",
        dataType: 'json',
        success: function (data) {

            //随机显示的数组
            var array = [];
            while (array.length < 11) {
                var random = Math.floor(Math.random() * data.length);
                if (array.indexOf(random) < 0) {
                    array.push(random);
                }
            }

            //镇店之宝模块渲染  共两个模块
            var hot = $('#main-left .main-left-hot .hot-div');
            for (let i = 0; i < 2; i++) {
                let picarr = data[array[i]].pic.split(';');
                
                hot.eq(i).html(`
                <h6>今日<span>镇店之宝</span></h6>
                <a href="show.html?product=${data[array[i]].id}" class="hot-cargo clear-float">
                    <p>
                        ${data[array[i]].title}
                        <span>￥${Number(data[array[i]].price).toFixed(2)}</span>
                    </p>
                    <img src="../img/${picarr[0]}" alt="">
                </a>
                <a href="show.html?product=${data[array[i]].id}" class="hot-link">立即查看</a>
                `);
            }
            // 为你推荐模块渲染  共5个模块
            var recommend = $('#main-left .main-left-recommend div');

            for (let i = 2; i < 7; i++) {
                let picarr = data[array[i]].pic.split(';');

                recommend.eq(i-2).html(`
                <a href="show.html?product=${data[array[i]].id}">
                    <h6>${data[array[i]].title}</h6>
                    <i></i>
                    <img src="../img/${picarr[0]}" alt="">
                    <span>￥${Number(data[array[i]].price).toFixed(2)}</span>
                </a>
                `);
            }
            //时时Z秒杀模块渲染  共4个模块
            var tabs = $('#main-left .main-left-tabs .tabs div');

            for (let i = 7; i < 11; i++) {
                let picarr = data[array[i]].pic.split(';');

                tabs.eq(i-7).html(`
                <a href="show.html?product=${data[array[i]].id}">
                    <img src="../img/${picarr[0]}" alt="">
                    <h5>¥${Number(data[array[i]].price).toFixed(2)}</h5>
                    <p>${data[array[i]].title}</p>
                    <i></i>
                </a>
                `);
            }   

        }
    });


});
