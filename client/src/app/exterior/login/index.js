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
            <TextField label='Password' type='password' {...textInput} required />
            <FormControlLabel label='Remember me'
                control={<Checkbox value='remember' {...primaryColor} />} />
            <Button type='submit' fullWidth variant='contained' {...primaryColor} >Sign In</Button>
            <Link component={RouterLink} to='/auth/register' style={centerdText}>
                {"Don't have an account? Sign Up!"}
            </Link>
        </form>
    </Grid>
);