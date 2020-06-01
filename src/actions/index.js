import * as type from './../constants/ActionTypes'
import callApi from './../utils/API_Caller'
import {connect} from 'react-redux'
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