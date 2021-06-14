import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoScreen from './screens/TodoScreen';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import Topbar from './components/Topbar';

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
    secondary: lightBlue
  },
  shape: {
    borderRadius: 50
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Topbar />
        <Switch>
          <Route path="/todo">
            <TodoScreen />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
