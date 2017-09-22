$(function(){

	/*  个人信息维护 与 系统账户管理 tab切换 */ 
	$('.user-system-list').on('click','.user-system-item',function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-content').find('.tab-content-item').addClass('hidden');
		$('.tab-content').find('.tab-content-item').eq(index).removeClass('hidden');
	})

	/* ------------------------------- 个人信息维护----------------------------- */ 

	/*  点击修改邮箱 */ 
	$('.change-email-btn').on('click',function(){
		layer.open({
		  type: 1,
		  area: ['420px', '300px'], //宽高
		  title: 'Change Email',
		  content: '<form action=""  class="changeEmailForm changeUserInfo">'
		  				+'<div class="form-group"><input type="text" name="user-email" class="form-control" placeholder="旧邮箱"></div>'
		  				+'<div class="form-group"><input type="text" name="user-new-email" class="form-control" placeholder="新邮箱"></div>'
		  		  +'</form>'
		  ,btn: ['保存','取消'],
		  yes: function(index,layero){
		  	// 获取新邮箱更改现在邮箱
		  }
		});
	})

	/*  点击修改电话号码 */ 
	$('.change-phone-btn').on('click',function(){
		layer.open({
		  type: 1,
		  area: ['420px', '300px'], //宽高
		  title: 'Phone Number',
		  content: '<form action=""  class="changePhoneForm changeUserInfo">'
		  				+'<div class="form-group"><input type="text" name="user-phone" class="form-control" placeholder="旧手机号码"></div>'
		  				+'<div class="form-group"><input type="text" name="user-new-phone" class="form-control" placeholder="新手机号码"></div>'
		  		  +'</form>'
		  ,btn: ['保存','取消'],
		  yes: function(index,layero){
		  	// 获取新手机号码更改现在手机号码
		  }
		});
	})

	/*  点击修改密码 */ 
	$('.change-pwd-btn').on('click',function(){
		layer.open({
		  type: 1,
		  area: ['420px', '300px'], //宽高
		  title: 'Password',
		  content: '<form action=""  class="changePwdForm changeUserInfo">'
		  				+'<div class="form-group"><input type="password" name="user-pwd" class="form-control" placeholder="旧密码"></div>'
		  				+'<div class="form-group"><input type="password" name="user-new-pwd" class="form-control" placeholder="新密码"></div>'
		  				+'<div class="form-group"><input type="password" name="user-again-pwd" class="form-control" placeholder="再次确认新密码"></div>'
		  		  +'</form>'
		  ,btn: ['保存','取消'],
		  yes: function(index,layero){
		  	// 获取新密码更改现在密码
		  }
		});
	})


	/* ------------------------------- 系统账户----------------------------- */ 

	// 点击新建帐号
		
	$('.system-content').on('click','.new-add',function(){

		layer.open({
		  type: 1,
		  area: ['480px', '380px'], //宽高
		  title: '新建账户',
		  content: '<form action=""  class="newAccountForm">'
		  				+'<div class="form-group"><label>账号名称:</label><input type="text" class="form-control" placeholder="必填" /></div>'
		  				+'<div class="form-group"><label>用户密码:</label><input type="password" class="form-control" placeholder="默认为:666666" /></div>'
		  				+'<div class="form-group"><label>权限:</label><select><option value="0">请选择</option><option value="1">普通用户</option></select></div>'
		  				+'<div class="form-group"><label>用户邮箱:</label><input type="text" class="form-control" placeholder="可选" /></div>'
		  				+'<div class="form-group"><label>手机号码:</label><input type="text" class="form-control" placeholder="可选" /></div>'
		  				+'<div class="form-group"><label>备注:</label><textarea type="text" class="form-control" placeholder="可选"></textarea></div>'
		  		  +'</form>'
		  ,btn: ['保存','取消'],
		  yes: function(index,layero){
		  	// 获取新账户数据存入数据库，关闭弹框
		  }
		});


	})



})