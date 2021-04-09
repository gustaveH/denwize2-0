import React from 'react';
import HeaderText from './HeaderText';
import Button from './Button';
import chat from '../images/card/chat.png';

const Contact = () => {
  return (
    <section className='contact' id='/contact'>
      <div className='container'>
        <div className='get-in-touch'>
          <HeaderText headerLine='Get in touch' id='contact-text' />
        </div>
        <div className='chat-picture'>
          <img src={chat} alt='lets chat' />
        </div>
        <div className='contact-form'>
          <form>
            <label>
              <input placeholder='Full Name' name='name' />
            </label>
            <textarea placeholder='How Can We help?' />
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
