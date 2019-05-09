import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Topnav.module.scss';

import {isProduction} from '../consts';
export default class TopNav extends React.Component {

  render () {
    return (
      <div className={styles.topnav}>
        <div className="container">
          <div className={styles.navItems}>
            <a href="/" className={styles.navItems}>
              <img src="https://fozg.net/static/images/logo.png" height="45" alt="Fozg Blog" />
            </a>
            <div className={styles.andChar}> & </div>
            <Link to="/blog"className={styles.navItems}>
              <img 
                src={"/f-read-box.png"}
                className={styles.logo} alt="f/Read"
              ></img>
              <span>f/Blog</span>
            </Link> 
          </div>
        </div>
      </div>
    )
  }
}
