$(function(){


	function OpenSel($par,$li){
	    $par.on('click',$li,function(){
	        var _cur=$(this).closest('li');
	        if(!_cur.hasClass('open')){
	        	// 只能展开一项
	            $par.find('.open').removeClass('open');
	            _cur.addClass('open');
	            _cur.find('.on').addClass('hidden');
	            _cur.find('.off').removeClass('hidden');
	        }else{
	            _cur.removeClass('open');
	            _cur.find('.on').removeClass('hidden');
	            _cur.find('.off').addClass('hidden');
	        }

	    })
	}


	OpenSel($('.particulars-list'),'.particulars-item');





})