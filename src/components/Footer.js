import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='social'>
        <a aria-label='Instagram' href='#'>
          <FaInstagram />
        </a>
        <a aria-label='Twitter' href='#'>
          <FaTwitter />
        </a>
        <a aria-label='Youtube' href='#'>
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}
