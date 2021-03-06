import React from 'react';
import Card from './Card';
import MusicAvatar from '../images/card/compose_music.png';
import WebdevAvatar from '../images/card/web_development.png';
import DbaAvatar from '../images/card/maintanance.png';
import HeaderText from './HeaderText';

const Services = () => {
  return (
    <>
      <section className='service-page' id='/services'>
        <div className='container'>
          <div className='services-header'>
            <HeaderText headerLine='services' />
          </div>
          <div className='service-text'>
            <p>
              Our services cover a wide range of areas in Tech, while focusing
              on the most critical issues and opportunities, but we are not
              limited to technology only.
            </p>
          </div>

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
              message='We provide career mentorship training, resume building, and job search. We take the time to teach new and excting skills and obtaining IT certifications. '
            />

            <a href='https://www.djziza.com/' target='_blank '>
              <Card
                className='cards'
                avatar={MusicAvatar}
                service='Entertainment'
                message='Our entertainment package includes music for private events, weddings, birthday parties, and any other event in mind. Book us for your next event!'
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
