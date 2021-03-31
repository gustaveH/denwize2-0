import React from 'react';
import Card from './Card';
import MusicAvatar from '../images/card/compose_music.png';
import WebdevAvatar from '../images/card/web_development.png';
import DbaAvatar from '../images/card/maintanance.png';
import HeaderText from './HeaderText';

const Services = () => {
  return (
    <>
      <section className='service-page'>
        <div className='container'>
          <HeaderText headerLine='services' />
          <p className='service-text'>
            Culpa laboris irure tempor nisi Lorem voluptate aliqua
            aliqua.Consectetur et dolore deserunt proident magna laboris ea
            Lorem aliquip occaecat elit reprehenderit do.
          </p>
          <div className='services-cards'>
            <Card
              className='cards'
              avatar={DbaAvatar}
              service='Consulting IT Services'
              message='Our consulting package includes database administration, website development, business consulting, and process Improvements.'
            />
            <Card
              className='cards'
              avatar={WebdevAvatar}
              service='Career Development'
              message='We provide career mentorship training, resume building, and job search. We take the time to teach new skills and obtaining IT certifications.'
            />
            <Card
              className='cards'
              avatar={MusicAvatar}
              service='Entertainment'
              message='Our entertainment package includes music for private events, weddings, birthday parties. Book us for your next event!'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
