import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import { AuthContext } from '../Context-API/CustomProvider';

var navlinks = [
  // {
  //   title: "Home",
  //   path: "/",
  // },
  {
   
    title: "Products",
    path: "/product",
  },
  // {
  //   title: "login",
  //   path: "/login",
  // },
  {
    title: "Add-Products",
    path: "/add-product",
  },
  {
    
    title: "Cart",
    path: "/cart",
  },
];

export default function Nav() {
  // Get the navigate function from react-router-dom

  return (
    <div className='navStyle'>
      <div className='Title'>
        <h2>Ecommerce Shop</h2>
      </div>
      <div className="NavItems">
        {navlinks.map((link) => (
          <Link to={link.path}>
            {link.title}
          </Link>
        ))}
      </div>
     
    </div>
  );
}
