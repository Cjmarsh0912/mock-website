import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import shopping_cart from '../images/shopping-cart.svg';

export default function Header(props) {
  const active = props.active;

  return (
    <header>
      <nav>
        <ul className='navbar'>
          <li className='title'>
            <h2>
              <Link to='/'>Redmond</Link>
            </h2>
          </li>
          <li className='link'>
            <Link className={active == 'blog' ? 'active' : ''} to='/'>
              Blog
            </Link>
          </li>
          <li className='link'>
            <Link className={active == 'about' ? 'active' : ''} to='/about'>
              About
            </Link>
          </li>
          <li className='link'>
            <Link className={active == 'contact' ? 'active' : ''} to='/contact'>
              Contact
            </Link>
          </li>
          <li className='link'>
            <a href='#'>Shop</a>
          </li>
          <li className='logo'>
            <a href='#'>
              <img src={instagram} />
            </a>
          </li>
          <li className='logo'>
            <a href='#'>
              <img src={twitter} />
            </a>
          </li>
          <li className='logo'>
            <a href='#'>
              <img src={youtube} />
            </a>
          </li>
          <li className='cart-icon'>
            <a href='#'>
              <img src={shopping_cart} />
            </a>
            <div className='cart-quantity-container'>
              <span className='cart-quantity'>0</span>
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
