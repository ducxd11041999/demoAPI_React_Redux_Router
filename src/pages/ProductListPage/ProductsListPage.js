import React, {Component} from 'react';
import ProductsList from './../../components/ProductsList/ProductsList'
import ProductItem from './../../components/ProductItem/ProductItem'
class ProductsListPage extends Component {
  render(){
  var products = [];
    return(
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">Thêm sản phẩm</button>
              <ProductsList>
                  {this.showProducts(products)}
              </ProductsList>
        </div>
      )
  }
  showProducts =(products)=>{
      var result = null;
      if(products.length > 0)
        result = products.map((product, index)=>{
          return <ProductItem 
          key = {index}
          product = {product}
          index = {index}
          />
        })
  }
}

export default ProductsListPage;
