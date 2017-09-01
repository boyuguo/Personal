$(function(){

	var $form = $('.form-box');
    var button = $.button();
	var validator = $form.validate({
            rules : {
                'user-name' : {
                    required: true
                }
                ,'password': {
                    required: true
                }
            }
            ,errorElement : 'div'
            ,errorPlacement: function (error, element) {
                if (element.closest('.form-group').length) {
                    error.insertAfter(element);
                }else{
                    element.after(error);
                }
            }
            ,submitHandler: function () {
                var send_data = $form.serializeObject();
                $.ajax({
                    url : $form.attr('action')
                    ,'dataType' : 'JSON'
                    ,'type' : 'POST'
                    ,'data' : send_data
                    ,'beforeSend' : function(){
                        button.loading($form.find('[type="submit"]'));
                    },success: function(){
                    	console.log('1111111')
	                     button.reset();
	                }
	                ,error: function(){
	                	console.log('2222')
	                     button.reset();
	                    validator.focusInvalid();
	                }
	            })
                
                return false;
            }
        });


})