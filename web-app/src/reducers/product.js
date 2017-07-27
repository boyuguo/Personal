
/*
    根据key（跟action里的定义需要一致） 返回处理后的结果

	key: func (根据对应action返回的数据结果)

**/


/*
	 在reducers里面进行数据匹配，与action里面传过来的条件进行匹配，返回相匹配的新数据
	 Object.assign（ arguments ）里面可以传多个参数，下面案例中第二个参数为原数据，第三个数据为匹配后的新数据
	 最好把新旧数据合并，返回合并后的data

*/

export default (product = {}, action)=> {

    switch (action.type) {
        case 'product-val':
            return Object.assign({},product,{data : action.data});
        case 'product-val-set':
       		return Object.assign({},product,{data : action.data})
    }
    return product;
}