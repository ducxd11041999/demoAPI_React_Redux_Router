import {combineReducers } from 'redux';
import productReducers from './products.js'
import itemProducers from './itemEditting'
const appReducers = combineReducers(
{
	products : productReducers,
	itemEdit: itemProducers
});

export default appReducers;