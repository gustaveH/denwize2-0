import React from 'react';
import { Link } from 'react-router-dom';
import Instagram from '../images/instagram.png';
import MixcloudFooter from '../images/mixcloud-footer.png';
import SpotifyFooter from '../images/spotify-footer.png';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='text-footer'>&copy;Denwize</p>
      <p className='text-footer'>Follow us:</p>
      <div className='footer-social'>
        <Link to='https://open.spotify.com/user/vm01elqhvak78e24ds1bk5rhc'>
          <img src={SpotifyFooter} alt='Spotify' />
        </Link>
        <Link to='https://www.instagram.com/iamdjziza/'>
          <img src={Instagram} alt='Spotify' />
        </Link>
        <Link to='https://www.mixcloud.com/djziza/'>
          <img src={MixcloudFooter} alt='Spotify' />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
