
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



/* --------------------------  header 用户状态  --------------------------*/ 

$(function(){

	var html = '<img src="../image/common/u1011.png" alt="" class="user-icon">'
			 +'<span class="user-name">shusen@fiberhome.com</span>'
			 +'<span class="line"></span>'
			 +'<div class="news clearfix">'//加 hidden 类 则不显示消息项
			 	+'<div class="new-prompt">'
			 		+'<img src="../image/common/u1213.png" alt="">'
			 		+'<span class="num">3</span>'
			 	+'</div>'
			 	+'<div class="news-dropdown">'
			 		+'<p class="tips">您需设置以下<span>2</span>项，才能进行 全面评估</p>'
			 		+'<ul class="news-list">'
			 			+'<li class="news-item active"><img src="../image/common/u1228.png" alt="">FTP未设置</li>'
			 			+'<li class="news-item"><img src="../image/common/u1228.png" alt="">备件信息未导入</li>'
			 		+'</ul>'
			 	+'</div>'
			 	+'<span class="line"></span>'
			 +'</div>'
			 +'<a href="" class="sign-out">退出</a>'



	$('#header-right').html(html);



})



























