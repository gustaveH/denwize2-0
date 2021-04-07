import React from 'react';
import landingImage from '../images/landing.jpg';
import Button from './Button';

const LandingPage = () => {
  return (
    <>
      <section className='main-page'>
        <div className='container'>
          <div className='left-column'>
            <h1 className='landing-text'>Welcome to Denwize!</h1>
            <p className='landing-paragraph'>
              Amet ad elit labore aliquip incididunt dolore do nulla. Aliqua
              cupidatat amet pariatur cillum laborum aute reprehenderit ad velit
              reprehenderit Lorem labore eu et.Amet ad elit labore aliquip
              incididunt dolore do nulla. Aliqua cupidatat amet pariatur cillum
              laborum aute reprehenderit ad velit reprehenderit Lorem labore eu
              et.
            </p>
            <div className='get-in-touch'>
              <Button message='Get In Touch' />
            </div>
          </div>
          <img
            src={landingImage}
            className='landing-image'
            alt="<a href='https://www.freepik.com/vectors/background'>Background vector created by rawpixel.com - www.freepik.com</a>"
          />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
