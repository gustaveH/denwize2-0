import React from 'react';
import HeaderLine from '../components/HeaderText';
import Djziza from '../components/Djziza';
import Djlogo from '../images/djziza-logo.png';
import Spotify from '../images/spotify-logo.png';
import Mixcloud from '../images/mixcloud.png';

const DjzizaForm = () => {
  return (
    <>
      <section className='dj-ziza'>
        <div className='container'>
          <img src={Djlogo} alt='DJ Logo' className='dj-logo' />
          <div className='dj-header'>
            <HeaderLine headerLine='show us some love' />
          </div>
          <div className='dj-name'>
            <Djziza />
          </div>
          <div className='dj-links'>
            <p className='listen-links'>Also...Check us out 👇</p>
            <img src={Spotify} alt='Spotify' className='spotify' />
            <img src={Mixcloud} alt='Mixcloud' className='mixcloud' />
          </div>
        </div>
      </section>
    </>
  );
};

export default DjzizaForm;
