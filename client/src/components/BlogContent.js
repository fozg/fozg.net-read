import React from 'react'
import moment from 'moment';

import Avatar from './Avatar';
import FixedBlogTitle from './FixedBlogTitle';

import {callAPI} from '../lib';
import {API} from '../consts';

import styles from './BlogContent.module.scss';
export default class BlogContent extends React.Component {
  state = {
    blog: null
  }

  componentDidMount () {
    console.log('window.isFirstLoad', window.isFirstLoad)
    if (!window.isFirstLoad) {
      new callAPI(API.BLOG, "GET", {slug: this.props.slug}).call().then(
        result => {
          console.log(result) 
          this.setState({blog: result});
          this.props.onBlogLoaded && this.props.onBlogLoaded(result);
        }
      ).catch(e => {
        console.log(e)
      })
    } else {
      window.isFirstLoad = false;
    }
  }

  render () {
    const {
      blog 
    } = this.state;

    // console.log(' render blog, window.isFirstLoad:', window.isFirstLoad)
    if (window.isFirstLoad && this.props.slug) {      
      // window.isFirstLoad = false;

      if (window.serverContent !== null) {
        return (
          <div className="content">
            <div id="clientContent" dangerouslySetInnerHTML={{__html: window.serverContent}} >
            </div>
          </div>
        );
      } else {
        return false;
      }      
    }

    if (!blog) return false;
    
    return (
      <div className={styles.content}>
        <FixedBlogTitle title={blog.title} author={blog.author} />
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.authorLine}>
          <Avatar {...blog.author} size="small" />
          {blog.created && <div className={styles.created}> • <em className={styles.createdEm}>{moment(blog.created).fromNow()}</em></div>}
        </div>
        <div id="clientContent">
          {blog &&
            <div dangerouslySetInnerHTML={{__html: blog.body}} />
          }
        </div>
      </div>
    )
  }
}
