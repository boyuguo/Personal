/**
  这里导出需要是一个方法， 方法里返回一个object，而且必须要要type这个key

  使用redux-thunk中间件之后，可以返回一个function 实现异步调用dispacth 更新store数据
  返回的func参数定义如下 (dispatch [,getState])=>{
   			请求数据... dispatch({
	   						type:'xxx',
	   						xxx:'xxx'
   						})
   }
**/

/* 
  dispatch action to 所有reducer
  简单的理解就是dispatch 带着这个action（触发一个事件） 去询问所有的reducer（事件处理器），
*/

export  const getData = (v)=>{
    return {
    	type : 'product-val',
      data : v
    }
};
export  const setData = (v)=>{
    return {
      type : 'product-val-set',
      data : v
    }
};