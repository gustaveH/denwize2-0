import React from 'react';
import { Link } from 'react-scroll';
import { MenuItems } from './MenuItems';

const NavLinks = () => {
  return (
    <>
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
    </>
  );
};

export default NavLinks;
