
/* 获取全部表单数据 */
$.fn.serializeObject = function () {
        var o = {}; 
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }   
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || ''; 
            }
        }); 
        return o;                                                                                                                                                                    
};  



/*
 *Button   loading
 */

$.button = function(){
    var _ButtonLoading = [];
    var d = 'disabled';
    return {
        'loading' : function($btn,msg){
            var load_msg = $btn.data('loading') || msg || 'Loading...'
                ,val  = $btn.is('input') ? 'val' : 'html';
            $btn.data({'cache_origin' : $btn[val]()});
            $btn[val](load_msg);
            $btn.addClass(d).attr(d,d);
            _ButtonLoading.push($btn);
        }
        ,'reset' : function(bool){
            // if true clear all
            var _clear = function(){
                var $btn =_ButtonLoading.pop();//array last
                if($btn){
                    var val  = $btn.is('input') ? 'val' : 'html';
                    var cache_origin = $btn.data('cache_origin');
                    $btn[val](cache_origin).removeData('cache_origin').removeClass(d).removeAttr(d);
                }
            };
            if(bool){
                while(_ButtonLoading[0]){
                    _clear();
                }
            }else{
                _clear()
            }
        }
    }
};

