$(".title").on('click','span',function (){
	
	var _this = $(this);
	if(_this.hasClass("on")){
		_this.removeClass("on");
		_this.text("已收藏");
		tips("<span class='icon-yes'></span>"+"收藏成功")
	} else {
		_this.addClass("on");
		_this.text("收藏");
		tips("已取消收藏");
	}
})
/*提示信息*/
function tips(msg){
	var el = $("<div />", {
        id: "tips",
        css: {
            position: "fixed",
            textAlign: "center",
            lineHeight: "3em",
            paddingLeft: "2em",
            paddingRight: "2em",
            fontSize: "1.4em",
            borderRadius: "0.5em",
            color: "#FFF",
            backgroundColor: "rgba(0, 0, 0, 0.6)"
        }
    }).html(msg).appendTo("body");
    var win = $(window), 
        winWidth = win.width(), 
        winHeight = win.height(), 
        tipWidth = el.innerWidth(), 
        tipHeight = el.innerHeight();
    var settings = {
        top: (winHeight - tipHeight) / 2,
        left: (winWidth - tipWidth) / 2,
        zIndex: 999
    };
    el.css(settings);
    setTimeout(function() {
        el.fadeOut(500, function() {
            $(this).remove();
        });
    }, 1e3);
}
