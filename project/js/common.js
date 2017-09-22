
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



	/* 按钮的 tab 切换 */
	/*
		isAllSelected =>
			true : 按钮可以同时被选中
			false :  一组按钮只可以选中一个
		callback =>
			某个内容块点击后的其它交互
	*/
	function btnTabChangeEvent($parent,$ele,isAllSelected,callback){
		$parent.on('click',$ele,function(){
			var _cur = $(this);
			if(isAllSelected){
				if(_cur.hasClass('active-btn')){
					_cur.removeClass('active-btn');
				}else{
					_cur.addClass('active-btn');
				}
			}else{
				if(!_cur.hasClass('active-btn')){
					_cur.siblings('.btn').removeClass('active-btn')
					_cur.addClass('active-btn');
				}

			}
			if(callback){
				callback();
			}
		})
		
	}



	/* 
		form 表单 复选框 多级全选取消效果  
		例如：一级全选 二级全选 三级菜单项
	 */ 
	function inpCheckboxSelectEvent(_this, checked, toChange){
		var _par = _this.parents('.input-level-box:first'),
				allChecked=true,isAllBtn =false;
			if(_this.get(0)==_par.find('input[type="checkbox"]:first').get(0)){
				isAllBtn = true;
				_par.find('input[type="checkbox"]').each(function(){
				   $(this).prop('checked',checked);
				});
				_par = _par.parents('.input-level-box:first');
			}else{
				_this.find('input[type="checkbox"]:gt(0)').each(function(){
				   if(!$(this).prop('checked')){
				   		allChecked=false;
				   }
				});
				if(toChange){
					_this.find('input[type=checkbox]:first').prop('checked',allChecked);
				}
			}
		if(_par.length){
			inpCheckboxSelectEvent(_par, allChecked,true);
		}
	}
