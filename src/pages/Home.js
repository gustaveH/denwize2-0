import React from 'react';
import '../App.scss';
import LandingPage from '../components/LandingPage';
import Navigation from '../components/Navigation';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Navigation />
      <LandingPage />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
