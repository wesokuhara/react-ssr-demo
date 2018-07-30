import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
