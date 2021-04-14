import React from 'react';
import landingImage from '../images/landing.jpg';
import { Link } from 'react-scroll';
import Button from './Button';

const LandingPage = () => {
  return (
    <>
      <section className='main-page' id='/'>
        <div className='container'>
          <div className='left-column'>
            <h1 className='landing-text'>Welcome to Denwize!</h1>
            <p className='landing-paragraph'>
              Amet ad elit labore aliquip incididunt dolore do nulla. Aliqua
              cupidatat amet pariatur cillum laborum aute reprehenderit ad velit
              reprehenderit Lorem labore eu et.Amet ad elit labore aliquip
              incididunt dolore do nulla. Aliqua cupidatat amet pariatur cillum
              laborum aute reprehenderit ad velit reprehenderit Lorem labore eu
              etttt.
            </p>
            <div className='get-in-touch'>
              <Link to='/contact' smooth={true} duration={1000}>
                <Button message='Get In Touch' />
              </Link>
            </div>
          </div>
          <div className='home-image'>
            <img
              className='landing-image'
              src={landingImage}
              alt="<a href='https://www.freepik.com/vectors/background'>Background vector created by rawpixel.com - www.freepik.com</a>"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
