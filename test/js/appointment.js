// appointment.js
;$(function(){
	$('.list_box').on('click','.add',function(){
		$(this).siblings('input').val(Number($(this).siblings('input').val())+1);
		$(this).siblings('.reduce').css('color','black')
	})
	
	$('.list_box').on('click','.reduce',function(){

		if (Number($(this).siblings('input').val()) == 2){
			$(this).css('color','#758694');
		};
		if (Number($(this).siblings('input').val())>1) {
			$(this).siblings('input').val(Number($(this).siblings('input').val())-1);
		} 
		
	});
	// 点击确定按钮
	$('.confirm').on('click',function(){
		$('.tips_content').html('啦啦啦啦啦拉拉啊啦啦啦啦了案例 拉埃啦啦啦啦拉拉啊啦啦啦啦了案例 拉埃啦啦啦啦拉拉啊啦啦啦啦了案例 拉埃啦啦啦啦拉拉啊啦啦啦啦了案例 拉埃啦啦啦啦拉拉啊啦啦啦啦了案例 拉埃啦啦啦啦拉拉啊啦啦啦啦了案例 拉埃啦啦啦啦拉拉啊啦啦啦啦了案例 拉埃啦啦啦啦拉拉啊啦啦啦啦了案例 拉埃啦啦了阿拉啦啦啦 阿拉阿拉阿拉阿拉了啊');
		$('.modality_window').show();
	})
	// 确定框取消按钮
	$('.tips_cancel').on('click',function(){
		$('.modality_window').css('display','none')
	})
	// 确定框确定按钮
	$('.tips_confirm').on('click',function(){
		// 
	})
	
	
});