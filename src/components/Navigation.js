import React from 'react';
import Button from '../components/Button';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MenuItems } from './MenuItems';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/denwize-color.png';

// import { Link as a } from 'react-scroll';

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='navbar'>
      <header className='container-nav'>
        <div onClick={() => scroll.scrollToTop()}>
          <img src={logo} className='image-logo' alt='logo' id='/home' />
        </div>
        <Link to='#'>
          <FaBars onClick={showSidebar} className='menu-bars' />
        </Link>
        <nav className={sidebar ? 'menu active' : 'menu'} onClick={showSidebar}>
          <Link to='#'>
            <FaTimes className='menu-times' onClick={showSidebar} />
          </Link>
          <ul className='links'>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={showSidebar}
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
