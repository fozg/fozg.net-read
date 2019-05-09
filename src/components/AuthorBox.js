import React from 'react';

import Avatar from './Avatar';

import styles from './AuthorBox.module.scss';

export default class AuthorBox extends React.Component {

  render () {
    const {author} = this.props;

    return (
      <div className={styles.authorBox}>
        <Avatar {...author} size="large" />
      </div>
    )
  }
}