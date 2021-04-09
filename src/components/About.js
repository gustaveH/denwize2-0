import React from 'react';
import HeaderText from './HeaderText';

const About = () => {
  return (
    <section className='about-us' id='/about'>
      <div className='section'>
        <HeaderText headerLine='About Us' />
        <div>
          <p>
            Denwize was established on the basis that knowledge and wisdom are
            an integral part of solving complex problems.
          </p>
          <br />
          <p>
            we focus on doing things the right way. We work with passion and put
            our client’s needs at the forefront of our processes. We listen
            intently, welcome new ideas, and above else we aim to simplify
            things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
