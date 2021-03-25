import React from 'react';
import css from './App.scss';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Contact from './components/Contact';
import { Route, Switch } from 'react-router';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  );
};

export default App;
