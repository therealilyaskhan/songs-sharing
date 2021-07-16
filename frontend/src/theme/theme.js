import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

// const original = createMuiTheme();
// original.shadows.splice(4, 1, '5px 0px 16px -3px rgba(0,0,0,0.47);');

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#334452',
      main: '#011627',
      dark: '#000f1b',
      contrastText: '#f4f4f4'
    },
    secondary: lightBlue,
    text: {
      primary: 'rgba(0, 0, 0, 0.95)'
    }
  },
  shape: {
    borderRadius: 50
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    body2: {
      fontSize: '0.92rem'
    }
  },
  //overriding the text-transform style rule of the .root class for the MuiButton Component
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize'
      }
    }
  },
  props: {
    MuiButton: {
      disableRipple: true
    }
  },
  // shadows: original.shadows
});

export default theme;