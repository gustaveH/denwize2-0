import React from 'react';
import './App.scss';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Contact from './components/Contact';
import { Link } from 'react-router-dom';
import About from './components/About';

const App = () => {
  return (
    <>
      <Navigation />
      <Link exact path='/' component={LandingPage} />
      <Link exact path='/services' component={Services} />
      <Link exact path='/about' component={About} />
      <Link exact path='/contact' component={Contact} />
    </>
  );
};

export default App;
