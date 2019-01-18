import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopNav from './components/TopNav';

import Blog from './routes/Blog';
import './scss/bootstrap.scss';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <TopNav></TopNav>
          <Route
            path="/blog/:slug"
            component={Blog}
          />
        </div>
      </Router> 
    );
  }
}

export default App;
