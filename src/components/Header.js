import React from 'react';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import shopping_cart from '../images/shopping-cart.svg';

export default function Header() {
  return (
    <header className='bg-color-light-red'>
      <nav>
        <ul className='navbar'>
          <li className='title'>
            <h2>
              <a href='#'>Redmond</a>
            </h2>
          </li>
          <li className='link'>
            <a className='active' href='#'>
              Blog
            </a>
          </li>
          <li className='link'>
            <a href='#'>About</a>
          </li>
          <li className='link'>
            <a href='#'>Contact</a>
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
    </header>
  );
}
