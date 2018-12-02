import React from 'react'
import { Link, Route } from "react-router-dom";

export default class SideBar extends React.Component {
  state = {
    blog: ""
  }

  componentDidMount () {
    
  }

  render () {
    const {
      match
    } = this.props;
    
    return (
      <div>
        <h3>This is sidebar</h3>
          <h3>{match && match.params.slug}</h3>
          <ul>
            <li><Link to="/blog/blog1">Blog 1</Link></li>
            <li><Link to="/blog/javascript">javascript</Link></li>
            <li></li>
          </ul>
              
      </div>
    )
  }
}