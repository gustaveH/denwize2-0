import React from 'react';
// import { Link } from 'react-router-dom';
import Instagram from '../images/instagram.png';
import MixcloudFooter from '../images/mixcloud-footer.png';
import SpotifyFooter from '../images/spotify-footer.png';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='text-footer'>&copy;Denwize</p>
      <p className='text-footer'>Follow us:</p>
      <div className='footer-social'>
        <a href='https://open.spotify.com/user/vm01elqhvak78e24ds1bk5rhc'>
          <img src={SpotifyFooter} alt='Spotify' />
        </a>
        <a href='https://www.instagram.com/iamdjziza/'>
          <img src={Instagram} alt='Spotify' />
        </a>
        <a href='https://www.mixcloud.com/djziza/'>
          <img src={MixcloudFooter} alt='Spotify' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
