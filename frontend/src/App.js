import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BuildSongScreen from './screens/BuildSongScreen';
import { ThemeProvider } from '@material-ui/core/styles';

import Topbar from './components/Topbar';
import UserProfileLayout from './layout/UserProfileLayout';
import ChatRoomLayout from './layout/ChatRoomLayout';
import GenresLayout from './layout/GenresLayout';

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
          <Route path="/profile">
            <Topbar />
            <UserProfileLayout />
          </Route>
          <Route path="/genres">
            <Topbar sticky responsive />
            <GenresLayout />
          </Route>
          <Route path="/rooms">
            <ChatRoomLayout />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
