import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Story from './Story';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/story/">Story</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Story} />
          <Route path="/about/" component={About} />
          <Route path="/story/" component={Story} />
        </div>
      </Router>
    );
  }
}

export default App;
