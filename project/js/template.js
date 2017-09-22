$(function(){


	$('#new-add').on('click',function(){
		layer.open({
		  type: 1,
		  area: ['802px', '640px'], //宽高
		  title: '编辑模版',
		  content: '<div class="template-dialog-box">'
		  				+'<div class="template-title-box"><label for="">模版名称:</label><input type="text" placeholder=" 全面评估模版" /></div>'
		  		  		+'<div class="dialog-right-content input-level-box" id="dialog-right-content">'
	  						+'<div class="allChecked"><input type="checkbox" name="all" id="all"><label for="all">全选</label></div>'
	  						+'<ul class="assess-dialog-menu-list">'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="ll" id="ll"><label for="ll">链路资源评估指标</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="ll" id="ll1"><label for="ll1">单段链路CIR带宽利用率</label></li>'
	  										+'<li><input type="checkbox" name="ll" id="ll2"><label for="ll2">单段链路PIR带宽利用率</label></li>'
	  										+'<li><input type="checkbox" name="ll" id="ll3"><label for="ll3">链路峰值带宽利用率</label></li>'
	  										+'<li><input type="checkbox" name="ll" id="ll4"><label for="ll4">链路忙时均值带宽利用率</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="lw" id="lw"><label for="lw">业务资源评估指标</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="lw" id="lw1"><label for="lw1">业务均值带宽资源使用效能</label></li>'
	  										+'<li><input type="checkbox" name="lw" id="lw2"><label for="lw2">业务峰值带宽资源使用效能</label></li>'
	  										+'<li><input type="checkbox" name="lw" id="lw3"><label for="lw3">业务端口均值带宽占用率</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="sb" id="sb"><label for="sb">设备资源评估指标</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="sb" id="sb1"><label for="sb1">槽位资源占用率</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb2"><label for="sb2">端口资源占用率</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb3"><label for="sb3">VCOAM资源评估</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb4"><label for="sb4">VPLS资源评估</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb5"><label for="sb5">隧道保护组资源</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb6"><label for="sb6">VPOAM资源</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb7"><label for="sb7">隧道保护组资源</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb8"><label for="sb8">ARP资源评估</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb9"><label for="sb9">Bypass资源评估</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb10"><label for="sb10">LSP-TX资源评估（FTN）</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb11"><label for="sb11">LSP-RX资源评估（ILM）</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb12"><label for="sb12">VE虚接口资源评估</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb13"><label for="sb13">槽位MIP资源占用率-PTN660</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb14"><label for="sb14">槽位MEP资源占用率-PTN660</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb15"><label for="sb15">交叉资源占用率-PTN660</label></li>'
	  										+'<li><input type="checkbox" name="sb" id="sb16"><label for="sb16">上框交叉资源占用率-PTN660</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="wl" id="wl"><label for="wl">网络结构安全评估指标</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="wl" id="wl1"><label for="wl1">汇聚节点逻辑成环比例</label></li>'
	  										+'<li><input type="checkbox" name="wl" id="wl2"><label for="wl2">接入节点逻辑成环比例</label></li>'
	  										+'<li><input type="checkbox" name="wl" id="wl3"><label for="wl3">汇聚环双归比例</label></li>'
	  										+'<li><input type="checkbox" name="wl" id="wl4"><label for="wl4">汇聚层超大环比例</label></li>'
	  										+'<li><input type="checkbox" name="wl" id="wl5"><label for="wl5">超大汇聚点比</label></li>'
	  										+'<li><input type="checkbox" name="wl" id="wl6"><label for="wl6">接入环双归比例</label></li>'
	  										+'<li><input type="checkbox" name="wl" id="wl7"><label for="wl7">接入层超大环比例</label></li>'
	  										+'<li><input type="checkbox" name="wl" id="wl8"><label for="wl8">环路故障风险评估</label></li>'
	  										+'<li><input type="checkbox" name="wl" id="wl9"><label for="wl9">支路故障风险评估</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="sbaq" id="sbaq"><label for="sbaq">设备安全评估</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="sbaq" id="sbaq1"><label for="sbaq1">主控盘保护比例</label></li>'
	  										+'<li><input type="checkbox" name="sbaq" id="sbaq2"><label for="sbaq2">交叉盘保护比例</label></li>'
	  										+'<li><input type="checkbox" name="sbaq" id="sbaq3"><label for="sbaq3">软件版本匹配比例</label></li>'
	  										+'<li><input type="checkbox" name="sbaq" id="sbaq4"><label for="sbaq4">设备老化率</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="ywaq" id="ywaq"><label for="ywaq">业务安全评估</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="ywaq" id="ywaq1"><label for="ywaq1">业务保护比例</label></li>'
	  										+'<li><input type="checkbox" name="ywaq" id="ywaq2"><label for="ywaq2">LSP逻辑同路由比例</label></li>'
	  										+'<li><input type="checkbox" name="ywaq" id="ywaq3"><label for="ywaq3">网际保护评估</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="sztb" id="sztb"><label for="sztb">时钟同步评估</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="sztb" id="sztb"><label for="sztb1">时钟成环比例</label></li>'
	  										+'<li><input type="checkbox" name="sztb" id="sztb"><label for="sztb2">设备时钟主备配置一致率</label></li>'
	  										+'<li><input type="checkbox" name="sztb" id="sztb"><label for="sztb3">时钟同步链路长度评估</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="sbhj" id="sbhj"><label for="sbhj">设备环境评估</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="sbhj" id="sbhj"><label for="sbhj1">温度电压合格率</label></li>'
	  										+'<li><input type="checkbox" name="sbhj" id="sbhj"><label for="sbhj2">风扇和温度匹配评估</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="gj" id="gj"><label for="gj">告警评估</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="gj" id="gj"><label for="gj1">告警数量评估</label></li>'
	  										+'<li><input type="checkbox" name="gj" id="gj"><label for="gj2">关键告警占比</label></li>'
	  										+'<li><input type="checkbox" name="gj" id="gj"><label for="gj3">高危告警数量</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="xn" id="xn"><label for="xn">性能评估</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="xn" id="xn"><label for="xn">光路性能合格率</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="bj" id="bj"><label for="bj">备件评估</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="bj" id="bj"><label for="bj1">数量匹配率</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  							+'<li class="assess-dialog-menu-item input-level-box">'
	  								+'<h5 class="tit"><span class="triangle"></span> <input type="checkbox" name="wg" id="wg"><label for="wg">网管评估</label></h5>'
	  								+'<div class="item-content">'
	  									+'<ul class="">'
	  										+'<li><input type="checkbox" name="wg" id="wg"><label for="wg1">管理能力匹配率</label></li>'
	  										+'<li><input type="checkbox" name="wg" id="wg"><label for="wg2">版本匹配率</label></li>'
	  									+'</ul>'
	  								+'</div>'
	  							+'</li>'
	  						+'</ul>'
	  					+'</div>'
		  		  +'</div>',
		  btn: ['保存','取消'],
		  yes: function(index,layero){
		  	
		  }
		});

		
		  /* 自定义评估交互事件 ---start--- */
			// 评估类型选择  =>  展开收起效果
			$('.assess-dialog-menu-list').on('click','.triangle',function(){
				var _par = $(this).parents('.assess-dialog-menu-item')[0];
				if(!$(_par).hasClass('open')){
					$(_par).addClass('open');
				}else{
					$(_par).removeClass('open');
				}
			})


			/* input -> checkbox 全选效果 */
			$(document).on('change','#dialog-right-content input[type="checkbox"]',function(){
						inpCheckboxSelectEvent($(this),$(this).prop('checked'));
			});
			


	})





})