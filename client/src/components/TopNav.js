import React from 'react';

import styles from './Topnav.module.scss';

import {isProduction} from '../consts';
export default class TopNav extends React.Component {

  render () {
    return (
      <div className={styles.topnav}>
        <div className="container">
          <img src={isProduction ? "/blog/public/f-read-box.png": "/public/f-read-box.png"} className={styles.logo} alt="f/Read"></img>
        </div>
      </div>
    )
  }
}