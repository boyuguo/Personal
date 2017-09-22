$(function(){


	$('.data-list').on('click','.assess-term',function(){
		layer.open({
		  type: 1,
		  area: ['755px', '500px'], //宽高
		  title: '评估项目(45)',
		  content: '<ul class="assess-term-list">'
		  				+'<li class="assess-term-item">'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">设备环境评估</h3>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>温度电压合格率</span></p>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>风扇和温度匹配评估</span></p>'
		  					+'</div>'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">设备环境评估</h3>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>温度电压合格率</span></p>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>风扇和温度匹配评估</span></p>'
		  					+'</div>'
		  				+'</li>'
		  				+'<li class="assess-term-item">'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">告警评估</h3>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>告警数量评估</span></p>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>关键告警占比</span></p>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>高危告警数量</span></p>'
		  					+'</div>'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">告警评估</h3>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>告警数量评估</span></p>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>关键告警占比</span></p>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>高危告警数量</span></p>'
		  					+'</div>'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">告警评估</h3>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>告警数量评估</span></p>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>关键告警占比</span></p>'
		  						+'<p class="tips"><img src="../image/result/u1688.png"/><span>高危告警数量</span></p>'
		  					+'</div>'
		  				+'</li>'
		  				+'<li class="assess-term-item">'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">设备资源评估指标</h3>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>VCOAM资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>隧道保护组资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>ARP资源评估</span></p>'
		  					+'</div>'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">设备资源评估指标</h3>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>VCOAM资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>隧道保护组资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>ARP资源评估</span></p>'
		  					+'</div>'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">设备资源评估指标</h3>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>VCOAM资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>隧道保护组资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>ARP资源评估</span></p>'
		  					+'</div>'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">设备资源评估指标</h3>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>VCOAM资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>隧道保护组资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>ARP资源评估</span></p>'
		  					+'</div>'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">设备资源评估指标</h3>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>VCOAM资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>隧道保护组资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>ARP资源评估</span></p>'
		  					+'</div>'
		  				+'</li>'
		  				+'<li class="assess-term-item">'
		  					+'<div class="assess-term-group">'
		  						+'<h3 class="title">设备资源评估指标</h3>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>VCOAM资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>隧道保护组资源评估</span></p>'
		  						+'<p class="tips gray"><img src="../image/result/u1778.png"/><span>ARP资源评估</span></p>'
		  					+'</div>'
		  				+'</li>'
		  			+'</ul>'
		});
	})

	/*  类型选择 按钮切换 */
	btnTabChangeEvent($('.checkout-type-box'),'.btn',false);
		
	


})