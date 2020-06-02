import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NotfoundPage from './pages/NotfoundPage/NotfoundPage'
import ProductsListPage from './pages/ProductListPage/ProductsListPage'
import ProductActionPage from './pages/ProductAddPage/ProductActionPage'

const routes = [
{
	path: '/',
	exact : true,
	main : () => {
		return <HomePage />
	}
},
{
	path : '/product-add',
	exact : false,
	main : ({history}) =>{
		return <ProductActionPage  history = {history}/>
	}
},
{
	path : '/product-edit/:id',
	exact : false,
	main : ({match, history}) =>{
		return <ProductActionPage match={match} history = {history}/>
	}
},
{
	path: '/product-list',
	exact : false,
	main : () => {
		return <ProductsListPage />
	}
},

{
	path: '',
	exact: false,
	main: () =>{
		return <NotfoundPage />
	}
}
]

export default routes