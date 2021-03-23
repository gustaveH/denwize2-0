import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/denwize-color.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [change, setChange] = useState(false);
  const handleChange = () => {
    setChange(!change);
  };
  const closeMenu = () => {
    setChange(false);
  };

  return (
    <nav className='nav-menu'>
      <header className='nav-items'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} className='image-logo' alt='logo' />
          </Link>
        </div>

        <ul className={change ? 'main-links active ' : 'main-links'}>
          <li>
            <Link className='links' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='links' to='/services'>
              Servicess
            </Link>
          </li>
          <li>
            <Link className='links' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='toggle-menu' onClick={handleChange}>
          {change ? (
            <FaTimes className='menu-times' />
          ) : (
            <FaBars className='menu-bars' />
          )}
        </div>
      </header>
    </nav>
  );
};

export default Navigation;
