import React from 'react';

import styles from './AuthorBox.module.scss';

export default class AuthorBox extends React.Component {

  render () {
    return (
      <div className={styles.authorBox}>
        Fozg [follow]
      </div>
    )
  }
}