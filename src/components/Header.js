import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CartQuantityContext } from '../App';
import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';
import shopping_cart from '../assets/images/shopping-cart.svg';

export default function Header(props) {
  const active = props.active;
  const cartQuantity = useContext(CartQuantityContext);

  return (
    <header>
      <nav>
        <ul className='navbar'>
          <li className='title'>
            <h2>
              <Link to='/mock-website'>Redmond</Link>
            </h2>
          </li>
          <li className='link'>
            <Link
              className={active == 'blog' ? 'active' : ''}
              to='/mock-website'
            >
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
            <Link className={active == 'shop' ? 'active' : ''} to='/shop'>
              Shop
            </Link>
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
            <Link to='/cart'>
              <img src={shopping_cart} />
            </Link>
            <div className='cart-quantity-container'>
              <span className='cart-quantity'>{cartQuantity}</span>
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
