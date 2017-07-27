/*
	导出最终store第一层的数据结构,
	｛
		key: func (根据对应action返回的数据结果)
	｝

**/

/*
	对所有的数据进行汇总，然后传给store

*/

import product from './product';


import {combineReducers} from 'redux'
export default combineReducers({
    product:product	
})
