import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import AuthRoute from '../common/routes/auth-route';
import theme from '../common/style/theme';

import Exterior from './exterior';
import Shell from './shell';

export default () => (
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <Switch>
                <Route path='/auth' component={Exterior}></Route>
                <AuthRoute exact component={Shell}></AuthRoute>
            </Switch>
        </CssBaseline>
    </ThemeProvider>
);