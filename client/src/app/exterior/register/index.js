import React from 'react';
import { Grid, FormControlLabel, TextField, Checkbox, Button, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { container } from '../../../common/style/container';
import { form } from '../../../common/style/form';
import { centerdText, requiredInput } from '../../../common/style/text';

const primaryColor = { color: 'primary' };

export default () => (
    <Grid style={container} container>
        <form style={form}>
            <TextField label='Name' {...requiredInput} />
            <TextField label='Last Name' {...requiredInput} />
            <TextField label='Password' type='password' {...requiredInput} />
            <TextField label='Confirm Password' type='password' {...requiredInput} />
            <Button type='submit' fullWidth variant='contained' {...primaryColor} >Register</Button>
            <Link component={RouterLink} to='/auth/login'
                style={centerdText} variant='body2'>
                {"I already have an account!"}
            </Link>
        </form>
    </Grid>
);