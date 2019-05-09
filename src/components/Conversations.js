import React from 'react';

import styles from './Conversations.module.scss';

export default class Conversations extends React.Component {
  state = {
    visible: false
  }
  componentDidMount () {
    this.timeOut = setTimeout(() => {
      this.setState({visible: true})
    }, 1000);
  }

  componentWillUnmount () {
    clearTimeout(this.timeOut);
  }

  render () {
    return (
      <div className={styles.Conversations}>
        <div className="container">
          Comment Comming soon
        </div>
      </div>
    )
  }
}