/*
	connect连接  本页面数据与store数据 
	第一个参数：mapStateToProps
	   建立state 跟 props 的关系， 通过state获取数据传递给props
	   去大数据里面取当前页面需要的数据
	第二个参数: mapDispatchToProps 
		映射dispatch action 到组件的props里。
	    组件里直接调用可触发dispatch action to reducer，然后修改大数据，下发给组件本身或者其它组件
	    这样可以做到跨组件更新数据
	
	connect()返回一个方法，参数是需要包裹的组件如connect(...)(Product)
*/


/*
	把当前页面与大数据进行关联， 调dispatch（action）方法，即需要参数（告诉别人要干什么）然后在reducers里面进行数据匹配
	action ＝＝》 就是告诉别人要干什么
*/



import React from 'react';
import {connect} from 'react-redux';
import {getData,setData} from './actions/productAction';
class Product extends React.Component{
    render () {
    	var v = this.props.data || 'world';
    	return(
    		<div>
    			<p>Hello <span> {v}  </span></p>
    			<InputWithConnect  />

    		</div>
    		
    		)
    }
}

class Input extends React.Component{
    
    handleChange(e) {
    	var v = e.target.value;
    	this.props.getData(v);
    	// this.setState({
    	// 	val : v
    	// })

    	
    }

    render () {
    	return(
    			<input type="text" onChange={(e)=>{this.handleChange(e)}}  />
    		)
    }
}

const InputWithConnect=connect(
	(state)=>({
	    data:state.product.data
	}),
	{getData:setData}
)(Input);

export default connect(
	(state)=>({
	    data:state.product.data
	}),
	{getData:getData}
)(Product);

