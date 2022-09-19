import React, { useContext, useRef } from 'react';
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';
import { CartQuantityContext } from '../App';

export default function Header(props) {
  const active = props.active;
  const cartQuantity = useContext(CartQuantityContext);
  const ResponsiveNavRef = useRef();
  const HeaderRef = useRef();

  const showMobileNavbar = () => {
    ResponsiveNavRef.current.classList.toggle('responsive-nav');
    HeaderRef.current.classList.toggle('toggle');
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      <header ref={HeaderRef}>
        <button onClick={showMobileNavbar} className='nav-btn'>
          <FaBars />
        </button>
        <h2 style={{ marginRight: 'auto' }}>
          <Link to='/mock-website'>Redmond</Link>
        </h2>
        <nav>
          <div className='site-links'>
            <Link
              className={active == 'blog' ? 'active' : ''}
              to='/mock-website'
            >
              Blog
            </Link>
            <Link className={active == 'about' ? 'active' : ''} to='/about'>
              About
            </Link>
            <Link className={active == 'contact' ? 'active' : ''} to='/contact'>
              Contact
            </Link>
            <Link className={active == 'shop' ? 'active' : ''} to='/shop'>
              Shop
            </Link>
          </div>
          <div className='social'>
            <a className='social-link' href='#'>
              <FaInstagram />
            </a>
            <a className='social-link' href='#'>
              <FaTwitter />
            </a>
            <a className='social-link' href='#'>
              <FaYoutube />
            </a>
          </div>
        </nav>
        <div className='cart-icon-container'>
          <Link className='cart-icon' to='/cart'>
            <FaShoppingCart />
          </Link>
          <div className='cart-quantity-container'>
            <span className='cart-quantity'>{cartQuantity}</span>
          </div>
        </div>
        <Outlet />
      </header>

      <div className='mobile-navbar' ref={ResponsiveNavRef}>
        <header>
          <button onClick={showMobileNavbar} className='nav-btn'>
            <FaTimes />
          </button>
          <h2 style={{ marginRight: 'auto' }}>
            <Link to='/mock-website'>Redmond</Link>
          </h2>
          <div className='cart-icon-container'>
            <Link className='cart-icon' to='/cart'>
              <FaShoppingCart />
            </Link>
            <div className='cart-quantity-container'>
              <span className='cart-quantity'>{cartQuantity}</span>
            </div>
          </div>
        </header>
        <nav className='mobile-navbar-nav'>
          <div className='site-links'>
            <Link
              className={active == 'blog' ? 'active' : ''}
              to='/mock-website'
            >
              Blog
            </Link>
            <Link className={active == 'about' ? 'active' : ''} to='/about'>
              About
            </Link>
            <Link className={active == 'contact' ? 'active' : ''} to='/contact'>
              Contact
            </Link>
            <Link className={active == 'shop' ? 'active' : ''} to='/shop'>
              Shop
            </Link>
          </div>
          <div className='social'>
            <a className='social-link' href='#'>
              <FaInstagram />
            </a>
            <a className='social-link' href='#'>
              <FaTwitter />
            </a>
            <a className='social-link' href='#'>
              <FaYoutube />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
