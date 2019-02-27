import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopNav from "./components/TopNav";

import Blog from "./routes/Blog";
import BlogDetail from "./routes/BlogDetail";
import "./scss/bootstrap.scss";

import withTracker from './withTracker';

class App extends Component {
  render() {
    return (
      <Router className="App" >
        <>
          <TopNav />
          <Route path="/blog" exact component={withTracker(Blog)} />
          <Route path="/blog/:slug" component={withTracker(BlogDetail)} />
        </>
      </Router>
    );
  }
}

export default App;
