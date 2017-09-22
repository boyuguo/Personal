$(function(){
	
	$('.config-content').on('click','.btn-compile',function(){
		if(!$(this).hasClass('hidden')){
			$(this).addClass('hidden');
			$('.btn-cancel').removeClass('hidden');
			$('.btn-conserve').removeClass('hidden');
		}
		
	})

	$('.config-content').on('click','.btn-cancel',function(){
		if(!$(this).hasClass('hidden')){
			$(this).addClass('hidden');
			$('.btn-conserve').addClass('hidden');
			$('.btn-compile').removeClass('hidden');
		}
		
	})




})