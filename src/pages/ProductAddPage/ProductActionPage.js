import React, {Component} from 'react';
import callApi from './../../utils/API_Caller.js'
import {Link} from 'react-router-dom'
import {actAddProductRequest, actGetProductRequest, actUpdateProductRequest} from './../../actions/index'
import {connect} from 'react-redux'
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        id: '',
        txtName:'',
        txtPrice: '',
        cbStatus: ''
    };
  }
  componentDidMount(){
    var {match} = this.props;
    if(match){
      var id = match.params.id;
      this.props.onEditProduct(id)
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps)
  {
      var {product} = nextProps;
      console.log(nextProps)
      if(nextProps && nextProps.product){
        this.setState({
          id: product.id,
          txtName:product.name,
          txtPrice: product.price,
          cbStatus: product.status
        })
      }
  }
  onChange = (e) =>{
      var target = e.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name] : value
      })
  }
  onSave = (e) =>{
      e.preventDefault();
      var{id, txtName, txtPrice, cbStatus} = this.state;
      var {history} = this.props;
      var product = {
          id: id,
          name: txtName,
          price: txtPrice,
          status : cbStatus
        }
      if(id){
          this.props.onUpdateProduct(product)
          history.goBack();
      }else{
        this.props.onAddProduct(product)
        history.goBack();
    }
  }
  render(){
    var{txtName, txtPrice, cbStatus} = this.state;
    return(
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
             <form onSubmit = {this.onSave}>
                <div className="form-group">
                   <label >Tên sản phẩm</label>
                   <input type="text" 
                   className="form-control" 
                   placeholder="Nhập tên sản phẩm" 
                   name = 'txtName'
                   value = {txtName}
                   onChange = {this.onChange}
                   />
                </div>
              <div className="form-group">
                   <label >Giá</label>
                   <input type="number" className="form-control"
                    placeholder="Nhập giá sản phẩm" 
                    name='txtPrice'
                    value = {txtPrice}
                    onChange = {this.onChange}
                    />
                </div>
                <div className="form-group">
                   <label>Trạng thái</label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" 
                    name = 'cbStatus'
                    value = {cbStatus}
                    onChange = {this.onChange}
                    checked = {cbStatus}
                    />
                      Còn hàng
                  </label>
                </div>
               <button type="submit" className="btn btn-primary">Lưu lại</button>
               <Link to = '/product-list' className = "btn btn-primary">Trở lại</Link>
             </form>
        </div>
      )
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return ({
    onAddProduct: (product) =>{
      dispatch(actAddProductRequest(product))
    },
    onEditProduct: (id) =>{
      dispatch(actGetProductRequest(id))
    },
    onUpdateProduct: (product) =>{
      dispatch(actUpdateProductRequest(product))
    }
  })
}
const mapStateToProps =(state)=>{
  return{
    product: state.itemEdit
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
