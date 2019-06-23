import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isUserConnected } from '../services/auth.service';

export default ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => isUserConnected()
            ? (<Component {...props} />)
            : (<Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
            />)
        }
    />
);