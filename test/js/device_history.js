// device_history.js
var myscroll; 
;$(function(){
	initIscroll();
    // if ($('.desc_word').height() >= '23em') {};

});
//设备历史点击展开
var current = 0;
function openOrClose(obj){

    var currentStatus = $(obj).attr('isopen');
    if (currentStatus == '0') {
        console.log($(obj).siblings('.item_desc').find('.desc').innerHeight ());
        current = 180;
        $(obj).find('img')[0].style.transform = 'rotate('+current+'deg)';
        obj.style.borderRadius = '0.67em 0.67em 0 0';
        $(obj).siblings('.item_desc').css('display','block');
        $(obj).attr('isopen','1');
    }else if(currentStatus == '1'){
        current = 0;
        $(obj).find('img')[0].style.transform = 'rotate('+current+'deg)';
        obj.style.borderRadius = '0.67em';
        $(obj).siblings('.item_desc').css('display','none');
        $(obj).attr('isopen','0');
    };
    initIscroll();
}     
function wordOpenOrClose(currentObj){
    if ( $(currentObj).attr('isshow') == '1') {
        $(currentObj).siblings('.desc_word').css('max-height','none');
        $(currentObj).text('收起');
        $(currentObj).attr('isshow','0');
    }else{
        $(currentObj).siblings('.desc_word').css('max-height','23em');
        $(currentObj).text('展开');
        $(currentObj).attr('isshow','1');
    };
    initIscroll()
}
//上拉加载更多

function initIscroll(){
    if (myscroll) {
        myscroll.refresh();
    }
    if(!myscroll){
        myscroll = new iScroll("iscroll_wrapper",{
            onScrollMove:function(){
                if (this.y<(this.maxScrollY)) {
                    $('.pull_icon').addClass('flip');
                    $('.pull_icon').removeClass('loading');
                    $('.more span').text('释放加载');
                }else{
                    $('.pull_icon').removeClass('flip loading');
                    $('.more span').text('上拉加载')
                }
            },
            onScrollEnd:function(){
                var scrolltop = this.y;
                if ($('.pull_icon').hasClass('flip')) {
                    $('.pull_icon').addClass('loading');
                    $('.more span').text('加载中...');
                    pullUpAction();
                }
                
            },
            onRefresh:function(){
                $('.more').removeClass('flip');
                $('.more span').text('上拉加载');
                
            }
            
        });
    }

    //load more
    function pullUpAction(){
        setTimeout(function(){
            $('.more span').text('上拉加载');
            console.log('加载更多')
            ////

            
        }, 1000)
    }
    if ($('.scroller').height()<$('#iscroll_wrapper').height()) {
        $('.more').hide();
        myscroll.destroy();
        myscroll = null;
    }else{
       $('.more').show(); 
    } 
}  