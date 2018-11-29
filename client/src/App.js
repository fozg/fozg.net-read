import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import renderBlog from './render/blog';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <div>
            Top navigation
          </div>
          <Route
            path="/blog/:slug"
            component={renderBlog}
          />
        </div>
      </Router> 
    );
  }
}

export default App;
