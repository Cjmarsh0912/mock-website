import React, { useRef } from 'react';
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  const cartQuantity = props.cartQuantity;
  const ResponsiveNavRef = useRef();
  const HeaderRef = useRef();

  const toggleMobileNavbar = () => {
    ResponsiveNavRef.current.classList.toggle('responsive-nav');
    HeaderRef.current.classList.toggle('toggle');
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      <header>
        <div ref={HeaderRef} className='navbar'>
          <button
            aria-label='Bars'
            onClick={toggleMobileNavbar}
            className='nav-btn'
          >
            <FaBars />
          </button>
          <h2 style={{ marginRight: 'auto' }}>
            <NavLink className='no-underline' to='/mock-website'>
              Redmond
            </NavLink>
          </h2>
          <nav>
            <div className='site-links'>
              <NavLink to='/mock-website'>Blog</NavLink>
              <NavLink to='/about/'>About</NavLink>
              <NavLink to='/contact/'>Contact</NavLink>
              <NavLink to='/shop/'>Shop</NavLink>
            </div>
            <div className='social'>
              <a aria-label='Instagram' className='social-link' href='#'>
                <FaInstagram />
              </a>
              <a aria-label='Twitter' className='social-link' href='#'>
                <FaTwitter />
              </a>
              <a aria-label='Youtube' className='social-link' href='#'>
                <FaYoutube />
              </a>
            </div>
          </nav>
          <div className='cart-icon-container'>
            <NavLink
              aria-label='Cart'
              className='cart-icon no-underline'
              to='/cart/'
            >
              <FaShoppingCart />
            </NavLink>
            <div className='cart-quantity-container'>
              <span className='cart-quantity'>{cartQuantity}</span>
            </div>
          </div>
        </div>

        <div className='mobile-navbar' ref={ResponsiveNavRef}>
          <div className='responsive-nav-header'>
            <button
              aria-label='Close'
              onClick={toggleMobileNavbar}
              className='nav-btn'
            >
              <FaTimes />
            </button>
            <h2 style={{ marginRight: 'auto' }}>
              <NavLink
                onClick={toggleMobileNavbar}
                className='no-underline'
                to='/mock-website'
              >
                Redmond
              </NavLink>
            </h2>
            <div className='cart-icon-container'>
              <NavLink
                onClick={toggleMobileNavbar}
                aria-label='Cart'
                className='cart-icon no-underline'
                to='/cart/'
              >
                <FaShoppingCart />
              </NavLink>
              <div className='cart-quantity-container'>
                <span className='cart-quantity'>{cartQuantity}</span>
              </div>
            </div>
          </div>
          <nav className='responsive-nav-navbar'>
            <div className='site-links'>
              <NavLink onClick={toggleMobileNavbar} to='/mock-website'>
                Blog
              </NavLink>
              <NavLink onClick={toggleMobileNavbar} to='/about/'>
                About
              </NavLink>
              <NavLink onClick={toggleMobileNavbar} to='/contact/'>
                Contact
              </NavLink>
              <NavLink onClick={toggleMobileNavbar} to='/shop/'>
                Shop
              </NavLink>
            </div>
            <div className='social'>
              <a aria-label='Instagram' className='social-link' href='#'>
                <FaInstagram />
              </a>
              <a aria-label='Twitter' className='social-link' href='#'>
                <FaTwitter />
              </a>
              <a aria-label='Youtube' className='social-link' href='#'>
                <FaYoutube />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
