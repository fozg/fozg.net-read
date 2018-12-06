import React from 'react'
import { Link } from "react-router-dom";

import styles from './SideNav.module.scss';

export default class SideNav extends React.Component {
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
        <h3>Other blogs</h3>
          <h3>{match && match.params.slug}</h3>
          <ul className={styles.sideNavList}>
            <li><Link to="/blog/blog1">Blog 1</Link></li>
            <li><Link to="/blog/javascript">javascript</Link></li>
          </ul>
              
      </div>
    )
  }
}