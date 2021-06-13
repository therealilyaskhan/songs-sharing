import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './screens/Test';
import Create from './screens/Create';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Test />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
