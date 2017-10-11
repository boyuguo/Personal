$(function(){
	/* 
		图标：具体数据需要写不同的myChart ＋ option
	 */
	var myChart1 = echarts.init(document.getElementById('echarts-box1'));
	var myChart2 = echarts.init(document.getElementById('echarts-box2'));
	var myChart3 = echarts.init(document.getElementById('echarts-box3'));
	var myChart4 = echarts.init(document.getElementById('echarts-box4'));
	var myChart5 = echarts.init(document.getElementById('echarts-box5'));
	var myChart6 = echarts.init(document.getElementById('echarts-box6'));
	var myChart7 = echarts.init(document.getElementById('echarts-box7'));
	var myChart8 = echarts.init(document.getElementById('echarts-box8'));
	var myChart9 = echarts.init(document.getElementById('echarts-box9'));
	var myChart10 = echarts.init(document.getElementById('echarts-box10'));
	var myChart11 = echarts.init(document.getElementById('echarts-box11'));
	var myChart12 = echarts.init(document.getElementById('echarts-box12'));
	option = {
	    color: ['#3398DB'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['汇聚节点逻辑成环比例', '汇聚环双归比例', '汇聚层超大环比例', '超大汇聚点比', '接入节点逻辑成环比例', '接入环双归比例', '接入层超大环比例','环路故障风险评估','支路故障风险评估'],
	            axisTick: {
	                alignWithLabel: true
	            },
	            axisLabel: {// x轴文字的倾斜角度
		            interval: 0,
		            rotate: -30
		        }
	        }
	    ],
	    grid: {  // x轴文字的高度
                    y2: 100  
              },  
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '60%',
	            data:[98, 72, 100, 98, 90, 92, 87, 10 ,70]
	        }
	    ]
	};

	// 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);
    myChart2.setOption(option);
    myChart3.setOption(option);
    myChart4.setOption(option);
    myChart5.setOption(option);
    myChart6.setOption(option);
    myChart7.setOption(option);
    myChart8.setOption(option);
    myChart9.setOption(option);
    myChart10.setOption(option);
    myChart11.setOption(option);
    myChart12.setOption(option);




    /* 
    	菜单－内容块 对应 

    	利用锚点链接的原理，所以导航的a标签的href= # + 对应内容块的ID
    	为了设置对应导航高亮，为了方便起见，导航的class需要与对应内容块的ID保持一致
    */
    
	var $sections = $('.particulars-content-item');
	$(window).scroll(function(){
	    var currentScroll = $(this).scrollTop();
	    var $currentSection = $currentSection == undefined ? $('#linkCircuit')  : $currentSection ;
	    $sections.each(function(){
	      var divPosition = $(this).offset().top;
	      if( divPosition - 1 < currentScroll){
	        $currentSection = $(this);
	      }
	      var id = $currentSection.attr('id');
	   	 $('.particulars-menu-item-link').removeClass('menu-active');
	   	 $("."+id).addClass('menu-active');
	      
	    })

	});



    /* 点导出评估报告 html转PDF */
    $('#export-btn').on('click',function(){
		html2canvas(document.getElementById('particulars-container'), {
		  onrendered:function(canvas) {
		      var contentWidth = canvas.width;
		      var contentHeight = canvas.height;

		      //一页pdf显示html页面生成的canvas高度;
		      var pageHeight = contentWidth / 592.28 * 841.89;
		      //未生成pdf的html页面高度
		      var leftHeight = contentHeight;
		      //页面偏移
		      var position = 0;
		      //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
		      var imgWidth = 595.28;
		      var imgHeight = 592.28/contentWidth * contentHeight;

		      var pageData = canvas.toDataURL('image/jpeg', 1.0);

		      var pdf = new jsPDF('', 'pt', 'a4');

		      //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
		      //当内容未超过pdf一页显示的范围，无需分页
		      if (leftHeight < pageHeight) {
			  pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
		      } else {
			      while(leftHeight > 0) {
			          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
			          leftHeight -= pageHeight;
			          position -= 841.89;
			          //避免添加空白页
			          if(leftHeight > 0) {
				        pdf.addPage();
			          }
			      }
		      }

		      pdf.save('content.pdf');
		  }
		})

	})
		
		












})