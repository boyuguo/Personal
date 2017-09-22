(function($) {
	var obj = {
		init: function() {
			
			this.indexfixedslide(); //首页侧边固定
		},
		
		indexfixedslide: function() { //首页侧边固定
			var indexleft = $('.xwzxcontent .indexleft'); //左侧固定定位的盒子
			var indexleftheight = indexleft.offset().top;
			var wrapper = $('.wrapper').width();
			var width = $(window).width(); //浏览器窗口宽度
			var height = $(window).height(); //浏览器窗口高度
			var indexleftHeight = $('.indexleft').height(); //左侧高度

			var indexright = $('.xwzxcontent .indexright'); //右侧固定定位的盒子
			var indexrightheight = indexright.outerHeight(); //右侧盒子的高度

			var indexrightoffsetheight = indexright.offset().top; //右侧盒子的高度
			var module = indexright.find('.module'); //右侧所有的模板
			var lastmoudle = indexright.find('.module:last-child'); //获取右侧最后一个
			var lastmoudleheight = lastmoudle.outerHeight();
			var readmore = $('.readmore'); //中间点击区域
			var scrolltop = 0; //用来判断用户是向上滚动还是向下滚动
			var temp = 0; //保存用户上一秒滚动条的位置	
			var arr=[];  //这个是scrolltop值的数组
			var flag=false; //判断用户回滚的标志;
			var tempos=0;//
			var maxarr = [0,0]; //定义一个空数组  存放滚动的值
			$(window).scroll(function() {
				scrolltop = $(this).scrollTop();
				if(scrolltop > indexleftheight) { //左侧固定定位
					indexleft.addClass('fixedscroll');
				} else {
					indexleft.removeClass('fixedscroll');
				};
				if(temp <scrolltop){  //右侧固定定位
					if(scrolltop > indexrightoffsetheight+indexrightheight-lastmoudleheight+10) { //（右侧固定定位向下滚动）;
						if(flag){
							
							
						}else{										
							indexright.addClass('absolutescroll');
							indexright.css({
								top: scrolltop - (indexrightheight-lastmoudleheight)-indexrightoffsetheight+10
							});
						}
						
					}

				} else { //向上滚
					
							temppos =  Math.max.apply(null, arr);
							maxarr[0]=temppos;						

						
                    					
					if(indexright.hasClass('absolutescroll')) { //右侧固定定位（右侧固定定位向下滚动）
						if((temppos - scrolltop) >= (indexrightheight - lastmoudleheight)) {
							indexright.css({
								top: scrolltop -indexrightoffsetheight
							})
						}
					} else {
						indexright.removeClass('absolutescroll').css({
							top:0
						});

					}

				}
				setTimeout(function() {
					temp = scrolltop;
					arr.push(temp);
					if(maxarr[0] !=maxarr[1]){
						arr=[];
						maxarr[1]=maxarr[0];//监听作用   
					};
					
					
				}, 0);
			});
			readmore.click(function() {
				var heights = $('.xwzxcontent').height();
				$('.xwzxcontent .con').height(heights + 16000)
			})

		}
	}
	obj.init();

})(jQuery)