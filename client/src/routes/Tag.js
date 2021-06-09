import React from 'react';
// import moment from 'moment';
// import {Link} from 'react-router-dom';
// import {callAPI} from '../lib';
// import {API} from '../consts';
import Blog from './Blog';
// import styles from './Blog.module.scss';

export default class Tag extends React.Component {
  

  render () {
    const tagName = this.props.match.params.tagName;
    return (
      <div>
        <div className="container">
          <h1 style={{fontWeight: 800, fontSize: '4em'}}>#{tagName}</h1>
        </div>
        <Blog tagFilter={tagName} />
      </div>
    )   
  }
}
