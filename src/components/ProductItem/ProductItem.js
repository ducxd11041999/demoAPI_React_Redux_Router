import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class ProductItem extends Component {
    onDelete = (id) =>{
        this.props.onDelete(id);
    }
  render(){
    var {index, product } = this.props
    var statusName = product.status ? "Còn hàng" : "Hết Hàng";
    var statusClass = product.status ? "warning" : "default";
    return(
       <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={`"label label-${statusClass} ml-30"`}>{statusName}</span>
            </td>
            <td>
                <Link to= {`/product-edit/${product.id}`}
                className="btn btn-danger mr-10"
                //onClick = {() =>this.onEdit(product.id)}
                >Sửa
                </Link>
                <button type="button"
                className="btn btn-primary mr-10"
                onClick = {() =>this.onDelete(product.id)}>Xóa</button>
            </td>
        </tr>
      )
  }
}

export default ProductItem;
