import React from 'react';
import cx from 'classnames';
import moment from 'moment';

import styles from './Avatar.module.scss';

import GitHubIcon from '../static/GitHub-Mark-32px.png';

export default ({
  profileImageUrl,
  name,
  title,
  joined,
  size = 'medium' // [small, medium, large]
}) => (
  <div className={styles.avatar} style={{flexDirection: size === 'large' ? 'column' : 'row'}}>
    <img src={profileImageUrl} className={cx(styles.avtImage, styles[size])} alt={name}></img>
    <div className={styles.namensocial}>
      <strong className={styles.name}>{name}</strong>
      {size === 'large' &&
        <div>
          <a href="https://github.com/fozg" target="_blank" className={styles.socialIconLink}  rel="noopener noreferrer">
            <img src={GitHubIcon} className={cx(styles.socialIcon, styles[`socialIcon-${size}`])} alt='github' />
          </a>
        </div>
      }
    </div>
    {size === 'large' && <pre className={styles.title}>{title}</pre>}
  </div>
)