import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';

export default (
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Main} />
    </Route>
  </Router>
);
