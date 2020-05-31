import React, {Component} from 'react';

class ProductItem extends Component {
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
                <button type="button" className="btn btn-danger mr-10">Sửa</button>
                <button type="button" className="btn btn-primary mr-10">Xóa</button>
            </td>
        </tr>
      )
  }
}

export default ProductItem;
