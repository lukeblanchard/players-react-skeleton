import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Roster from './Roster';
import NewPlayer from './NewPlayer';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/roster" component={Roster} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/player/new" component={NewPlayer} />
    </Switch>
  </Router>
);

export default App;
