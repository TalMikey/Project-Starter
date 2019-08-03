import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import User from './user';
import AuthRoute from '../../common/routes/auth-route';

export default () => (
  <Switch>
    <Route exact path='/' component={Home}></Route> 
    <AuthRoute exact path='/user' component={User}></AuthRoute>
  </Switch>
);