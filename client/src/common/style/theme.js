import { createMuiTheme } from '@material-ui/core';
import { lightBlue, blueGrey, red } from '@material-ui/core/colors';

export default createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: lightBlue,
        error: red
    }
});