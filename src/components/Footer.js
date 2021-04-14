import React from 'react';
// import { Link } from 'react-router-dom';
import Instagram from '../images/instagram.png';
import MixcloudFooter from '../images/mixcloud-footer.png';
import SpotifyFooter from '../images/spotify-footer.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='text-footer'>&copy;Denwize {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
