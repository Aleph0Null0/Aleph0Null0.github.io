import { createTheme } from '@mui/material/styles';
import { pink, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[900],
        },
        secondary: {
            main: pink[700],
        }
    },
    spacing: 16,
});

export default theme;