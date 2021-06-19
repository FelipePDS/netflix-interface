import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Browse from './pages/Browse';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        
        <Route path='/browse' component={Browse} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
