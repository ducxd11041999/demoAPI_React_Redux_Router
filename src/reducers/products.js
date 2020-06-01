import * as type from './../constants/ActionTypes'
var initialState = [];

const productReducers = (state = initialState , action) =>{
	switch(action.type){
		case type.FETCH_PRODUCTS:
			state = action.products;
			return[...state];
		default:
			return[...state];
	}
}

export default productReducers;