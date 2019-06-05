import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/routes/private-route'

import Exterior from './exterior';
import App from './app'

export default () => (
    <Switch>
        <Route path='/login' component={Exterior}></Route>
        <PrivateRoute component={App}></PrivateRoute>
    </Switch>
);