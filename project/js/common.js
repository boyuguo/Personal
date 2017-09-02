$(function(){

	/*展开关闭菜单效果*/
	function OpenSel($par,$li){
	    $par.on('click',$li,function(){
	        var _cur=$(this).closest('li');
	        if(!_cur.hasClass('open')){
	        	// 只能展开一项
	            //$par.find('.open').removeClass('open');
	            _cur.addClass('open');
	        }else{
	            _cur.removeClass('open');
	        }

	    })
	}


	OpenSel($('.menu-list'),'.main-menu-item');

	


})