import React from 'react';

import styles from './Topnav.module.scss';

import {isProduction} from '../consts';
export default class TopNav extends React.Component {

  render () {
    return (
      <div className={styles.topnav}>
        <div className="container">
          <img src={isProduction ? "/public/f-read.png": "/f-read.png"} className={styles.logo} alt="f/Read"></img>
        </div>
      </div>
    )
  }
}