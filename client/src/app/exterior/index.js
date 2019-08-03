import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './login';
import Register from './register';

export default () => (
  <Switch>
    <Route exact path='/auth/login' component={Login}></Route> 
    <Route path='/auth/register' component={Register}></Route> 
  </Switch>
);