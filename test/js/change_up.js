// change_up.js
;$(function () {
	$('.check_area').on('click',function(){
		if ($(this).attr('check') == '0') {
			$(this).find('img').attr('src','../img/change_yes.png');
			$(this).attr('check','1');
		}else if($(this).attr('check') == '1'){
			$(this).find('img').attr('src','../img/change_no.png');
			$(this).attr('check','0');
		};
	})
});