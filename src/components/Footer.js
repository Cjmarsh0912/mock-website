import React from 'react';
import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';

export default function Footer() {
  return (
    <footer>
      <div className='social'>
        <a href='#'>
          <img src={instagram} />
        </a>
        <a href='#'>
          <img src={twitter} />
        </a>
        <a href='#'>
          <img src={youtube} />
        </a>
      </div>
    </footer>
  );
}