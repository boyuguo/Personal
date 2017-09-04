$(function(){

	$('.user-system-list').on('click','.user-system-item',function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-content').find('.tab-content-item').addClass('hidden');
		$('.tab-content').find('.tab-content-item').eq(index).removeClass('hidden');
	})


	$('.change-email-btn').on('click',function(){
		layer.open({
		  type: 1,
		  area: ['420px', '300px'], //宽高
		  title: 'Change Email',
		  content: 'change email content '
		});
	})

	$('.change-phone-btn').on('click',function(){
		layer.open({
		  type: 1,
		  area: ['420px', '300px'], //宽高
		  title: 'Phone Number',
		  content: 'Phone Number content'
		});
	})

	$('.change-pwd-btn').on('click',function(){
		layer.open({
		  type: 1,
		  area: ['420px', '300px'], //宽高
		  title: 'Password',
		  content: 'Password content'
		});
	})
		




})