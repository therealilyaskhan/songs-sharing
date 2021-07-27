import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BuildSongScreen from './screens/BuildSongScreen';
import { ThemeProvider } from '@material-ui/core/styles';
import Topbar from './components/Topbar';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/build">
            <Topbar />
            <BuildSongScreen />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
