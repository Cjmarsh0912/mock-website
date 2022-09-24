import { useRef } from 'react';
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Header(props) {
  const cartQuantity = props.cartQuantity;
  const ResponsiveNavRef = useRef();
  const HeaderRef = useRef();

  const toggleMobileNavbar = () => {
    ResponsiveNavRef.current.classList.toggle(styles.responsive_nav);
    HeaderRef.current.classList.toggle(styles.toggle);
    document.body.classList.toggle(styles.no_scroll);
  };

  return (
    <>
      <header>
        <div ref={HeaderRef} className={styles.navbar}>
          <button
            aria-label='Bars'
            onClick={toggleMobileNavbar}
            className={styles.nav_btn}
          >
            <FaBars />
          </button>
          <h2 className={styles.site_name}>
            <NavLink className='no-underline' to='/mock-website'>
              Redmond
            </NavLink>
          </h2>
          <nav>
            <div className={styles.site_links}>
              <NavLink to='/mock-website'>Blog</NavLink>
              <NavLink to='/about/'>About</NavLink>
              <NavLink to='/contact/'>Contact</NavLink>
              <NavLink to='/shop/'>Shop</NavLink>
            </div>
            <div className={styles.social}>
              <a aria-label='Instagram' className={styles.social_link} href='#'>
                <FaInstagram />
              </a>
              <a aria-label='Twitter' className={styles.social_link} href='#'>
                <FaTwitter />
              </a>
              <a aria-label='Youtube' className={styles.social_link} href='#'>
                <FaYoutube />
              </a>
            </div>
          </nav>
          <div className={styles.cart_icon_container}>
            <NavLink aria-label='Cart' className={styles.cart_icon} to='/cart/'>
              <FaShoppingCart />
            </NavLink>
            <div className={styles.cart_quantity_container}>
              <span className={styles.cart_quantity}>{cartQuantity}</span>
            </div>
          </div>
        </div>

        <div className={styles.mobile_navbar} ref={ResponsiveNavRef}>
          <div className={styles.responsive_nav_header}>
            <button
              aria-label='Close'
              onClick={toggleMobileNavbar}
              className={styles.nav_btn}
            >
              <FaTimes />
            </button>
            <h2 className={styles.site_name}>
              <NavLink
                className='no-underline'
                onClick={toggleMobileNavbar}
                to='/mock-website'
              >
                Redmond
              </NavLink>
            </h2>
            <div className={styles.cart_icon_container}>
              <NavLink
                onClick={toggleMobileNavbar}
                aria-label='Cart'
                className={styles.cart_icon}
                to='/cart/'
              >
                <FaShoppingCart />
              </NavLink>
              <div className={styles.cart_quantity_container}>
                <span className={styles.cart_quantity}>{cartQuantity}</span>
              </div>
            </div>
          </div>
          <nav className={styles.responsive_nav_navbar}>
            <div className={styles.site_links}>
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
            <div className={styles.social}>
              <a aria-label='Instagram' className={styles.social_link} href='#'>
                <FaInstagram />
              </a>
              <a aria-label='Twitter' className={styles.social_link} href='#'>
                <FaTwitter />
              </a>
              <a aria-label='Youtube' className={styles.social_link} href='#'>
                <FaYoutube />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
