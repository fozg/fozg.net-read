import React from 'react';

import styles from './Topnav.module.scss';

export default class TopNav extends React.Component {

  render () {
    return (
      <div className={styles.topnav}>
        <div className="container">

          <img src="/f-read.png" className={styles.logo}></img>
        </div>
      </div>
    )
  }
}