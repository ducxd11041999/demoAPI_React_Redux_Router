import * as type from './../constants/ActionTypes'
var initialState = {};

const itemProducers = (state = initialState, action) =>{
	switch(action.type){
		case type.EDIT_PRODUCT:
			return action.product
		default:
			return state
	}
}

export default itemProducers;