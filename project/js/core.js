$(function(){


		layer.open({
		  type: 1,
		  area: ['420px', '250px'], //宽高
		  title: '指标设置',
		  content: '<div class="core-dialog-box">'
		  				+'<h3 class="title">您需要设置以下指标才能进行 <b>全面评估！</b></h3>'
		  				+'<div class="item"><img src="../image/core/u1251.png" /> <span>FTP未设置</span></div>'
		  				+'<div class="item"><img src="../image/core/u1251.png" /> <span>F备件未导入</span></div>'
		  		  +'</div>',
		  btn: ['去设置','取消'],
		  yes: function(index,layero){
		  	window.location.href = '../html/setup.html'
		  }
		});
		
	


})