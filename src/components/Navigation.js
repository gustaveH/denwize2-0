import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/denwize-color.png';
import NavLinks from './NavLinks';

// import { Link as a } from 'react-scroll';

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='navbar'>
      <header className='container-nav'>
        <Link to='/'>
          <img src={logo} className='image-logo' alt='logo' id='/home' />
        </Link>
        <Link to='#'>
          <FaBars onClick={showSidebar} className='menu-bars' />
        </Link>
        <nav className={sidebar ? 'menu active' : 'menu'}>
          <Link to='#'>
            <FaTimes className='menu-times' onClick={showSidebar} />
          </Link>
          <NavLinks />
          <div className='dj-ziza-btn'>
            <Link to='/djziza'>
              <Button message='DJziza' />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
