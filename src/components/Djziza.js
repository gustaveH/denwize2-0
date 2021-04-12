import React from 'react';

import Button from '../components/Button';
import Calendar from './Dalendar';

const Djziza = () => {
  return (
    <>
      <div className='dj-form' id='/djziza'>
        <form action='https://formspree.io/f/xpzkzeja' method='POST'>
          <label for='name'>Name</label>

          <input type='text' name='name' />

          <label for='email'>Email</label>
          <input type='email' email='_replyto' />

          <label for='name'>Date</label>
          <Calendar className='datepicker' />

          <label for='description'>
            In only one (1) sentence, please explain what musical experience you
            would like to feel at your event (e.g. old school, all-90s, etc...)
            Go Ahead...Mix it up if you like!!
          </label>
          <textarea name='Message' placeholder='Describtion..' />

          <label for='background'>
            What type of music moves your groove thang?!
          </label>
          <textarea name='Inspire Us' placeholder='Background' />
          <label for='describe'>
            Let’s get personal...What songs are on repeat in your Spotify,
            Tidal, SoundCloud, Apple Music Apps?
          </label>
          <textarea name='Inspire Us' placeholder='Describe it!' />
          <label for='forgot anything?'>
            Let us know of any special requests!
          </label>
          <textarea
            name='Inspire Us'
            placeholder='What Did We Forget anything?'
          />
          <div className='submit-button'>
            <Button message="Let's Jam" type='submit' value='Submit' />
          </div>
        </form>
      </div>
    </>
  );
};

export default Djziza;
