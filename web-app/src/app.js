/*
	＊store是用来管理所有数据
	＊reducer 处理action返回的数据，并传给store，是修改store的唯一通路
	＊applyMiddleware 中间件 －－－store和action之间的逻辑处理插件  
	  －－－当前页面的数据需要经过action传递给reducers最后传递给store，store再下发给组建
	＊ import 后使用｛｝与不使用的区别：
	   import XX from 'xxx'  === import {default as XX} from 'xxx'
	   default as XX ：XX 为default引入插件变量的别名
	   加｛｝是为了引用明确的组件，不加引用的是default输出的组件

*/

/*
    store 初始为空，是经过一系列的数据处理，最后得到数据

    1.在product页面：先把本页面与大数据关联  --src/Product
    2.然后去触发dispatch（action）＝》告诉要触发的事件  --src/actions/productAction
    3.去reducers（事件处理器）里面做匹配，更新数据   --src/reducers/product
    4.在index里面对所有页面数据做汇总，传递给store   --src/reducers/index

*/

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import Product from './Product';
import {render} from 'react-dom';
import './app.scss';


const store = createStore(
  reducer
)

class APP extends React.Component{
    constructor(props){
        super(props);

    }
    render () {
        return (
            	<Provider store={store}>
            			<Product />
                </Provider>
        )
    }
}

render(<APP/>,document.getElementById('box'));
