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
    <img src={profileImageUrl} className={cx(styles.avtImage, styles[size])}></img>
    <div className={styles.namensocial}>
      <strong className={styles.name}>{name}</strong>
      {size === 'large' &&
        <div>
          <a href="https://github.com/fozg" target="_blank" className={styles.socialIconLink}>
            <img src={GitHubIcon} className={cx(styles.socialIcon, styles[`socialIcon-${size}`])} />
          </a>
        </div>
      }
    </div>
    {size === 'large' && <pre>{title}</pre>}
    {size === 'large' && <div className={styles.joined}>
      Joined: {moment(joined).format('MMM DD YYYY')}
    </div>}
    
  </div>
)