import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link, Route } from "react-router-dom";

import {callAPI} from '../lib';
import {API} from '../consts'
export default class RenderBlog extends React.Component {

  componentDidMount () {
    ReactDOM.render(<SideBar match={this.props.match} />, document.getElementById('sidebar'));
  }

  render () {
    return (
      false
    )
  }
}

class SideBar extends React.Component {
  state = {
    blog: ""
  }
  componentDidMount () {
    new callAPI(API.BLOG, "GET", {slug: this.props.match.params.slug}).call().then(
      result => {
        console.log(result)
      }
    )
  }
  render () {
    return (
      <Router>
        <Route
          path="/blog/:slug"
          component={({match}) => (
            <div style={{border: '1px solid #ccc'}}>
              This is sidebar
              <h3>{match && match.params.slug}</h3>
              <Link to="/blog/blog1">Blog 1</Link>
            </div>
          )}
        />
      </Router>
    )
  }
}