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

		/* 显示自定义评估 */ 
		$('.v-btn').on('click',function(){
			if($('.custom-box').hasClass('hidden')){
				$('.custom-box').removeClass('hidden');
			}else{
				$('.custom-box').addClass('hidden');
			}
		})

		/* 评分 */ 
		/*
			num :  评分
			scale : 进度条比例
		*/
		var $frac = $("#fraction"),$scale = $('#progress-bar-scale');
		function fractionAnimationFun(num,scale){
			$frac.html(num)
			$scale.css('width', scale+'%');
			if(scale<100){
				num -=5;
				scale +=20;
				setTimeout(function(){fractionAnimationFun(num<0?0:num,scale)},1000)
				$('.core-top-left .text').html('正在评估,请稍等...');
			}else{
				$('.progress-bar').addClass('hidden');
				$('.fraction-box .icon').removeClass('fraction-box-icon-animation');
				$('.core-top-left .text').html('评估完成!')
				$('.assess-box').find('div').addClass('hidden');
				$('.assess-box .assess-report').removeClass('hidden');
			}

		}

		$('.entire-btn').on('click',function(){
			$('.progress-bar').removeClass('hidden');
			$('.fraction-box .icon').addClass('fraction-box-icon-animation');
			fractionAnimationFun(100,2);
		})

		/* 自定义评估弹框内容 */

		$('.custom-btn').on('click',function(){
			layer.open({
			  type: 1,
			  area: ['1130px', '650px'], //宽高
			  title: '项目评估（45）',
			  content: '<div class="assess-dialog-box">'
			  				+'<div class="assess-dialog-left">'
			  					+'<div class="form-group margin-btm-10">'
			  						+'<label class="label-tips">任务名称:</label><input placeholder="自定义评估12" class="inp" />'
			  					+'</div>'
			  					+'<div class="form-group margin-btm-10 network-content">'
			  						+'<label class="label-tips">网络层次:</label><button class="btn select-btn">汇聚层</button><button class="btn select-btn">接入层</button>'
			  					+'</div>'
			  					+'<div class="form-group margin-btm-10 assess-content">'
			  						+'<label class="label-tips">评估对象:</label><select class="slt"><option value="0" >全部</option><option value="1">EMS1</option><option value="2">EMS2</option><option value="3">EMS3</option></select>'
			  					+'</div>'
			  					+'<div class="form-group margin-btm-10 cycle-setup-content">'
			  						+'<label class="label-tips">周期设置:</label><button class="btn select-btn">单次</button><button class="btn select-btn cycle-btn">周期</button>'
			  					+'</div>'
			  					+'<div class="form-group margin-btm-10 date-content">'
			  						+'<label class="label-tips">开始日期:</label><button class="btn select-btn">立即</button><button class="btn select-btn">自定义</button>'
			  					+'</div>'
			  					+'<div class="form-group margin-btm-10 cycle-content hidden">'
			  						+'<label class="label-tips">周期:</label><input placeholder="30" value="30" class="cycle-inp" /><button class="btn select-btn">天</button><button class="btn select-btn">月</button><button class="btn select-btn">年</button><label class="label-tips">期数:</label><input placeholder="30" value="30" class="cycle-inp disabled" disabled />'
			  					+'</div>'
			  				+'</div>'
			  				+'<div class="assess-dialog-right">'
			  					+'<div class="dialog-right-title">'
			  						+'<label>评估指标:</label>'
			  						+'<button class="btn select-btn">自定义评估</button>'
			  						+'<button class="btn select-btn select-more-btn">选择模版</button>'
			  						+'<select class="slt-template hidden"><option value="0" >全面评估模版</option><option value="1">自定义评估模版1</option></select>'
			  					+'</div>'
			  					+'<div class="dialog-right-content input-level-box" id="dialog-right-content">'
			  						+'<div class="allChecked"><input type="checkbox" name="all" id="all"><label for="all">全选</label> <button class="btn btn-blue preserve-template">保存为模板</button></div>'
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
			  				+'</div>'
			  		  +'</div>',
			  btn: ['提交评估','取消'],
			  yes: function(index,layero){
			  	window.location.href = '../html/setup.html'
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
			
			// 网络层次
			btnTabChangeEvent($('.network-content'),'.select-btn',true)
			

			// 周期设置
			function cycleEvent(){ //周期设置里的周期按钮高亮后出现底部的 周期＋期数
				if($('.cycle-btn').hasClass('active-btn')){
					$('.cycle-content').removeClass('hidden');
				}else{
					$('.cycle-content').addClass('hidden');
				}
			}
			btnTabChangeEvent($('.cycle-setup-content'),'.select-btn',false,cycleEvent)

			// 开始时间
			btnTabChangeEvent($('.date-content'),'.select-btn',false)

			//  周期 期数
			btnTabChangeEvent($('.cycle-content'),'.select-btn',false)

			// 评估指标
			function assessEvent(){
				if($('.select-more-btn').hasClass('active-btn')){
					$('.slt-template').removeClass('hidden');
				}else{
					$('.slt-template').addClass('hidden');
				}
			}
			btnTabChangeEvent($('.dialog-right-title'),'.select-btn',false,assessEvent)

			/* 自定义评估交互事件 ---end--- */
			

		})

		
	


})