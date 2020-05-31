import {combineReducers } from 'redux';
import productReducers from './products.js'

const appReducers = combineReducers(
{
	products : productReducers
});

export default appReducers;