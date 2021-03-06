import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import TopNav from "./components/TopNav";
import Footer from './components/Footer';
import Blog from "./routes/Blog";
import Tag from "./routes/Tag";
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
            <Route path="/blog/:slug" exact component={withTracker(BlogDetail)} />
            <Route path="/blog/t/:tagName" exact component={withTracker(Tag)} />
            <Route path="/blog/t" exact component={() => <Redirect to="/blog" />} />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
