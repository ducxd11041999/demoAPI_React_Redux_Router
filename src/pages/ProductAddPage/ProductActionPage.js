import React, {Component} from 'react';
import callApi from './../../utils/API_Caller.js'
import {Link} from 'react-router-dom'
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
      callApi(`products/${id}`, 'GET', null).then(res =>{
          var data = res.data
          this.setState({
              id : data.id,
              txtName : data.name,
              txtPrice: data.price,
              cbStatus: data.status
          })
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
      if(id){
          callApi(`products/${id}`, 'PUT', {
                name: txtName,
                price: txtPrice,
                status : cbStatus
          }).then(res =>{
            history.goBack();
          })
      }else{
      callApi('products', 'POST', {
          name: txtName,
          price: txtPrice,
          status : cbStatus
      }).then(res =>{
            history.goBack();
      })
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
export default ProductActionPage;
