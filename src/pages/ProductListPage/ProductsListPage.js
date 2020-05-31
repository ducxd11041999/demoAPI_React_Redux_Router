import React, {Component} from 'react';
import ProductsList from './../../components/ProductsList/ProductsList'
import ProductItem from './../../components/ProductItem/ProductItem'
import {connect} from 'react-redux'
import callApi from './../../utils/API_Caller'
import {Link} from 'react-router-dom'
class ProductsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: []
    };
  }
  componentDidMount(){
      callApi('products', 'GET', null).then(res =>{
          this.setState({
            products: res.data
          })
      })
  }
  render(){
  var {products} = this.state;
  

  console.log(products)
    return(
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Link to ="/product-add" className="btn btn-info mb-10">Thêm sản phẩm</Link>
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
       return result;
  }

}
const mapStateToProps = (state) =>{
  return{
        products : state.products
  }
}
export default connect(mapStateToProps, null)(ProductsListPage);
