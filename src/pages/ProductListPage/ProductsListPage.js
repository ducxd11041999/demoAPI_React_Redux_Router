import React, {Component} from 'react';
import ProductsList from './../../components/ProductsList/ProductsList'
import ProductItem from './../../components/ProductItem/ProductItem'
import {connect} from 'react-redux'
import callApi from './../../utils/API_Caller'
import {Link} from 'react-router-dom'
import {actFectchProductsRequest} from './../../actions/index'
class ProductsListPage extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
        products: []
    };*/
  }
  componentDidMount(){
      this.props.fetchProductRequest();
  }
  onDelete = (id) =>{
    //console.log(id)
    callApi(`products/${id}`, 'DELETE', null).then(res =>{
          if(res.status === 200)
          {
              var {products} = this.state;
              var index = this.findIndex(products, id)
              if(index !== -1)
              {
                  products.splice(index, 1)
                  this.setState({
                    products
                  })
              }
          }
      })
  }
  findIndex = (arr, id) =>{
      var result = -1;
          arr.forEach((product, index)=>{
              if(id === product.id)
              {
                  result = index;
              }
          })
      return result;
  }
  render(){
  var {products} = this.props;
  //console.log(products)
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
          onDelete = {this.onDelete}
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
const mapDispatchToProps = (dispatch, props) =>{
    return ({
      fetchProductRequest: () =>{
        dispatch(actFectchProductsRequest())
      }
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
