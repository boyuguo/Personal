$(function(){
	
	/*  点击编辑进行修改 */ 
	$('.config-content').on('click','.btn-compile',function(){
		if(!$(this).hasClass('hidden')){
			$(this).addClass('hidden');
			$('.btn-cancel').removeClass('hidden');
			$('.btn-conserve').removeClass('hidden');
		}

		$('.data-list').find('.inp[type="text"]').each(function(){
			$(this).attr('disabled',false);
			$(this).addClass('active');
		})
		
	})

	/*  点击取消 */ 
	$('.config-content').on('click','.btn-cancel',function(){
		if(!$(this).hasClass('hidden')){
			$(this).addClass('hidden');
			$('.btn-conserve').addClass('hidden');
			$('.btn-compile').removeClass('hidden');
		}
		$('.data-list').find('.inp[type="text"]').each(function(){
			$(this).attr('disabled','disabled');
			$(this).removeClass('active');
		})
		
	})

	/*  点击保存 */ 
	$('.config-content').on('click','.btn-conserve',function(){
		alert('提交表单数据，更改数据库，返回编辑页面')
		
	})




})