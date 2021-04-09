import React from 'react';
import { useState } from 'react';
import { MenuItems } from './MenuItems';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/denwize-color.png';

import { Link } from 'react-scroll';

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
          <ul className='links'>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.url}
                    smooth={true}
                    duration={1000}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
