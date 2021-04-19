import React from 'react';
import HeaderText from './HeaderText';
import Button from './Button';
import chat from '../images/card/chat.png';

const Contact = () => {
  return (
    <section className='contact' id='/contact'>
      <div className='get-in-touch'>
        <HeaderText headerLine='Contact' id='contact-text' />
      </div>
      <div className='container'>
        <div className='chat-picture'>
          <img src={chat} alt='lets chat' />
        </div>
        <div className='contact-form'>
          <form action='https://formspree.io/f/mknknazn' method='POST'>
            <label>
              <input placeholder='Full Name' type='text' name='name' />
            </label>
            <label>
              <input placeholder='email' type='email' name='_replyto' />
            </label>
            <textarea name='message' placeholder='How Can We help?' />
            <div className='submit-button'>
              <Button message='Send Message' type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
