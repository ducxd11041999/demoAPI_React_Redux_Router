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
	main : () =>{
		return <ProductActionPage />
	}
},
{
	path : '/product-edit/:id',
	exact : false,
	main : ({match}) =>{
		return <ProductActionPage match={match}/>
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