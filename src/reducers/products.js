import * as type from './../constants/ActionTypes'
var initialState = [];
var findIndex = (arr, id) =>{
      var result = -1;
          arr.forEach((product, index)=>{
              if(id === product.id)
              {
                  result = index;
              }
          })
      return result;
  }
const productReducers = (state = initialState , action) =>{
	var index = -1;
	switch(action.type){
		case type.DELETE_PRODUCT:
			index = findIndex(state, action.id)
			if(index !== -1)
			{
				state.splice(index, 1);
			}
			return[...state];
		case type.FETCH_PRODUCTS:
			state = action.products;
			return[...state];
		case type.ADD_PRODUCT:
			state.push(action.product)
			return[...state];
		case type.UPDATE_PRODUCT:
			index = findIndex(state, action.product.id)
			if(index !== -1)
			{
				state[index] = action.product
			}
			return[...state];
		default:
			return[...state];
	}
}

export default productReducers;