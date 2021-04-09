import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link exact path='/' component={LandingPage} />
      <Link exact path='/services' component={Services} />
      <Link exact path='/about' component={About} />
      <Link exact path='/contact' component={Contact} />
      <Footer />
    </>
  );
};

export default Home;
