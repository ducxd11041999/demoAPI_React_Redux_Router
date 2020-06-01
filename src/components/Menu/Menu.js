import React, {Component} from 'react';
import {Link, useRouteMatch} from 'react-router-dom'

const menus = [
{
    name: 'Trang chủ',
    to: '/',
    exact: true
},
{
    name: 'Sản phẩm',
    to: '/product-list',
    exact: false
}
];
const MenuLink = ({label, to ,activeOnlyWhenExact}) => {
      let match = useRouteMatch({
        path  : to,
        exact: activeOnlyWhenExact
      });
      return (
        <li className  = {match ? "active" :"abc"}>
          <Link to =  {to} className = 'my-link'>
            { label }
          </Link>
        </li>
      );
}
class Menu extends Component {
  render(){
    return( 
        <div className="navbar navbar-default" >
          <div className="container-fluid">
            <a href="/" className="navbar-brand">HOME</a>
            <ul className="nav navbar-nav">
                {this.showMenu(menus)}
            </ul>
          </div>
        </div>
      )
  }
  showMenu = (menus) =>{
    var result = null;
    if(menus.length > 0)
    {
        result = menus.map((menu, index) =>{
          return(
            <MenuLink key ={index} 
            label = {menu.name} 
            to = {menu.to} 
            activeOnlyWhenExact = {menu.exact} />
        )})
    }
    return result;
  }
}

export default Menu;
