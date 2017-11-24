
$(function() {

    $("body").get(0).addEventListener('touchstart',function(){},false);
    /*评分 */
    $(".grade_trigger").on("touchend", function () {
        $(this).siblings().removeClass("icon-star2").addClass("icon-star1");
        $(this).removeClass("icon-star2").addClass("icon-star1");
        $(this).nextAll().removeClass("icon-star1").addClass("icon-star2")
    });


    /*选择改约原因*/
    $("div.item").each(function () {
        $(this).touchPage('click', function (elem) {
            $("div.item").removeClass("select");
            $(elem).addClass("select");
        });
    });


    var u = navigator.userAgent;
    //var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    //解决当点击拨号时悬浮按钮位置乱的问题 (未测试， 无测试环境)
    if(isiOS){
        $("input").each(function(){
            $(this).focus(function(){
                var but=$("div.bottom_button");
                if(but.length>0){
                    but.css("position","static");
                }
            });
            $(this).blur(function(){
                var but=$("div.bottom_button");
                if(but.length>0){
                    but.css("position","fixed");
                }
            });
        });

        $("textarea").each(function(){
            $(this).focus(function(){
                var but=$("div.bottom_button");
                if(but.length>0){
                    but.css("position","static");
                }
            });
            $(this).blur(function(){
                var but=$("div.bottom_button");
                if(but.length>0){
                    but.css("position","fixed");
                }
            });
        });

    }else{

    }

    

});
/* 新增批量预约选择框 */
//单选或取消
function Deselect(currentObj,isSelect) {
    $(currentObj).css('display','none');
    $(currentObj).siblings('.choiceImg').css('display','block');
}
// 全选
function Allselect(currentObj,isSelect){

  $(currentObj).css('display','none');
  $(currentObj).siblings('.choiceImg').css('display','block');
  for (var i = 0; i < $('.order_list').length; i++) {
    $($('.order_list')[i]).find('.choiceImg').eq(1).css('display','block');
    $($('.order_list')[i]).find('.choiceImg').eq(0).css('display','none');
    if (isSelect==1) {
        $($('.order_list')[i]).find('.choiceImg').eq(0).css('display','block');
        $($('.order_list')[i]).find('.choiceImg').eq(1).css('display','none');
    }

  }

}

// 付款页面切换付款方法
function switchingMode(currentobj){
    var currentWay = $(currentobj).attr('way');
    if (currentWay == 'alipay') {
        // 支付宝
        $('.card_tips').find('span').text('支付宝');
        $(currentobj).addClass('active').siblings().removeClass('active');
    }else if(currentWay == 'wechat'){
        // 微信
        $('.card_tips').find('span').text('微信');
        $(currentobj).addClass('active').siblings().removeClass('active');
    };
}


//点击备注
function remarksWord(currentobj){
    $(currentobj).css('display','none');
    $(currentobj).siblings('.remarkBox').css('display','block');
    $(currentobj).siblings('.list_title').addClass('borderBottom');
}

//选择设置金额选项
function checkItem(currentobj){
    var currentCheck = $(currentobj).attr('check');
    if (currentCheck == 'on') {
        $(currentobj).attr('check','off');
    }else if(currentCheck == 'off'){
        $(currentobj).attr('check','on');
    };
}