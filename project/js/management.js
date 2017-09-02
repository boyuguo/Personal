$(function(){

	$('.user-system-list').on('click','.user-system-item',function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-content').find('.tab-content-item').addClass('hidden');
		$('.tab-content').find('.tab-content-item').eq(index).removeClass('hidden');
	})




})