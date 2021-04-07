import React from 'react';
import '../src/App.scss';
import DjzizaForm from '../src/pages/DjzizaForm';
import Home from './pages/Home';

import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/djziza' component={DjzizaForm} />
      </Switch>
    </>
  );
};

export default App;
