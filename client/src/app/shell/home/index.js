import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import { centerdText, textInput } from '../../../common/style/text';

export default () => (
    <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                </IconButton>
                <Typography variant="h6" noWrap>
                    Material-UI
          </Typography>
                <div>
                    <InputBase
                        {...textInput}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    </div>
);