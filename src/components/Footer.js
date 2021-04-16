import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='text-footer'>
        &copy;{new Date().getFullYear()} DENWIZE CONSULTING, LLC. ALL RIGHTS
        RESERVED.
      </p>
      <p>
        Made by{' '}
        <a
          className='footer-credit'
          href='https://gustavehabimana.com/'
          target='_blank'
          rel='noreferrer'
        >
          Gustave
        </a>
      </p>
    </footer>
  );
};

export default Footer;
