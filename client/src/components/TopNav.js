import React from 'react';

import styles from './Topnav.module.scss';

import {isProduction} from '../consts';
export default class TopNav extends React.Component {

  render () {
    return (
      <div className={styles.topnav}>
        <div className="container">
          <div className={styles.navItems}>
            <a href="/" className={styles.navItems}>
              <img src="https://fozg.net/static/images/logo.png" height="45"/>
            </a>
            <div className={styles.andChar}> & </div>
            <a href="#" className={styles.navItems}>
              <img src={isProduction ? "/blog/public/f-read-box.png": "/f-read-box.png"} className={styles.logo} alt="f/Read"></img>
              f/Read
            </a>
          </div>
        </div>
      </div>
    )
  }
}