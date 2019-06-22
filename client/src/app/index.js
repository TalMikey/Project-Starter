import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../common/routes/private-route'

import Exterior from './exterior';
import App from './shell';

export default () => (
    <Switch>
        <Route path='/login' component={Exterior}></Route>
        <PrivateRoute exact component={App}></PrivateRoute>
    </Switch>
);