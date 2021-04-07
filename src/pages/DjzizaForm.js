import React from 'react';
import HeaderLine from '../components/HeaderText';
import Navigation from '../components/Navigation';
import Djziza from '../components/Djziza';
import Djlogo from '../images/djziza-logo.png';
import { FaSpotify, FaMixcloud, FaRegPlayCircle } from 'react-icons/fa';

const DjzizaForm = () => {
  return (
    <>
      <Navigation />
      <section className='dj-ziza'>
        <img src={Djlogo} alt='DJ Logo' />

        <div className='section'>
          <HeaderLine headerLine='show us some love' />
          <div className='dj-links'>
            <FaSpotify />
            <FaMixcloud />
            <FaRegPlayCircle />
            <Djziza />
          </div>
        </div>
      </section>
    </>
  );
};

export default DjzizaForm;
