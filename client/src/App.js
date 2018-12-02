import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import blog from './routes/blog';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Route
            path="/blog/:slug"
            component={blog}
          />
        </div>
      </Router> 
    );
  }
}

export default App;
