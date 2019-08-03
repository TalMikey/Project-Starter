import React from 'react';
import { Grid, FormControlLabel, TextField, Checkbox, Button, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { container } from '../../../common/style/container';
import { form } from '../../../common/style/form';
import { centerdText, textInput } from '../../../common/style/text';

const primaryColor = { color: 'primary' };

export default () => (
    <Grid style={container} container>
        <form style={form}>
            <TextField label='Name' {...textInput} required />
            <TextField label='Last Name' {...textInput} required />
            <TextField label='Password' type='password' {...textInput} required />
            <TextField label='Confirm Password' type='password' {...textInput} required />
            <Button type='submit' fullWidth variant='contained' {...primaryColor} >Register</Button>
            <Link component={RouterLink} to='/auth/login'
                style={centerdText} variant='body2'>
                {"I already have an account!"}
            </Link>
        </form>
    </Grid>
);