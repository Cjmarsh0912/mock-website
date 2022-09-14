import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='social'>
        <a href='#'>
          <FaInstagram />
        </a>
        <a href='#'>
          <FaTwitter />
        </a>
        <a href='#'>
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}
