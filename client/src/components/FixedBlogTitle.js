import React from 'react';
import cx from 'classnames';

import Avatar from './Avatar';

import {isProduction} from '../consts';

import styles from './FixedBlogTitle.module.scss';

const SCROLLY_POSITION_TO_VISIBLE = 240;

export default class FixedBlogTitle extends React.Component {
  state = {
    isVisible: false
  }
  
  componentDidMount () {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.onScroll);    
  }

  onScroll = e => {
    if (window.scrollY > SCROLLY_POSITION_TO_VISIBLE) {
      this.setState({isVisible: true})
    } else {
      this.setState({isVisible: false})
    }
  }

  render () {
    const {
      title,
      author
    } = this.props;
    
    const {
      isVisible
    } = this.state;

    return (
      <div
        className={cx(styles.FixedBlogTitle, {[styles.show]: isVisible})}
      >
        <div className="container">
          <div className={styles.inner}>
            {/* <img src={isProduction ? "/public/f-read.png": "/f-read.png"} className={styles.logo}></img> */}
            <h3 className={styles.title}>{title}</h3>
            <em className={styles.by}>by</em>
            <Avatar {...author} size="small" />
          </div>
        </div>
      </div>
    )
  }
}