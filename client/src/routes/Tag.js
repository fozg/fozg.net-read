import React from 'react';
// import moment from 'moment';
// import {Link} from 'react-router-dom';
// import {callAPI} from '../lib';
// import {API} from '../consts';

// import styles from './Blog.module.scss';

export default class Blog extends React.Component {
  

  render () {
    const tagName = this.props.match.params.tagName;
    return (
      <div className="container">
        <h1 style={{fontWeight: 800}}>#{tagName}</h1>
        <h4>Comming soon..</h4>
      </div>
    )   
  }
}