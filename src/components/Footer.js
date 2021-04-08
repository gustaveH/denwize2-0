import React from 'react';
import Instagram from '../images/instagram.png';
import MixcloudFooter from '../images/mixcloud-footer.png';
import SpotifyFooter from '../images/spotify-footer.png';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='text-footer'>&copy;Denwize</p>
      <p className='text-footer'>Follow us:</p>
      <div className='footer-social'>
        <img src={Instagram} alt='IG' />
        <img src={SpotifyFooter} alt='Spotify' />
        <img src={MixcloudFooter} alt='Mixcloud' />
      </div>
    </div>
  );
};

export default Footer;
