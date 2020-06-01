import * as type from './../constants/ActionTypes'
import callApi from './../utils/API_Caller'
export const actFectchProducts = (products) =>{
	return ({
		type: type.FETCH_PRODUCTS,
		products
	})
}
export const actFectchProductsRequest = () =>{
	return (dispatch) =>{
			callApi('products', 'GET', null).then(res =>{
            	dispatch(actFectchProducts(res.data))
      		})
		}
}
export const actDeleteProduct = (id) =>{
	return ({
		type: type.DELETE_PRODUCT,
		id
	})
}
export const actDeleteProductRequest = (id) =>{
	return (dispatch) =>{
    callApi(`products/${id}`, 'DELETE', null).then(res =>{
          dispatch(actDeleteProduct(id))
      })
	}
}

export const actAddProduct = (product) =>{
	return ({
		type: type.ADD_PRODUCT,
		product
	})
}
export const actAddProductRequest = (product) =>{
	return (dispatch) =>{
	callApi('products', 'POST', product).then(res =>{
			dispatch(actAddProduct(res.data))
      })
	}
}

export const actGetProduct = (product) =>{
	return ({
		type: type.EDIT_PRODUCT,
		product
	})
}
export const actGetProductRequest = (id) =>{
	return (dispatch) =>{
		callApi(`products/${id}`, 'GET', null).then(res =>{
			dispatch(actGetProduct(res.data))
      })
	}
}

export const actUpdateProduct = (product) =>{
	return ({
		type: type.DELETE_PRODUCT,
		product
	})
}
export const actUpdateProductRequest = (product) =>{
	return (dispatch) =>{
		callApi(`products/${product.id}`, 'PUT', product).then(res =>{
			dispatch(actUpdateProduct(res.data))
			//console.log(res)
      })
	}
}
