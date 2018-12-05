import React from 'react';
import cx from 'classnames';

import styles from './Avatar.module.scss';

export default ({
  imageUrl,
  name,
  title,
  size = 'medium' // [small, medium, large]
}) => (
  <div className={styles.avatar}>
    <img src={imageUrl} className={cx(styles.avtImage, styles[size])}></img>
    <strong className={styles.name}>{name}</strong>
  </div>
)