import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {callAPI} from '../lib';
import {API} from '../consts';
import cx from 'classnames';
import styles from './Blog.module.scss';

export default class Blog extends React.Component {
  state = {
    blogs: []
  }

  componentDidMount () {
    // TODO: hard code for now
    new callAPI(API.BLOGS_BY_USER , "GET", {username: "fozg"}).call().then(
      blogs => {
        this.setState({blogs})
      }
    )
  }

  render () {
    const {
      blogs
    } = this.state;
    const {
      tagFilter
    } = this.props;

    return (
      <div className="container">
        <div className={styles.blogsWrap}>
          {blogs.filter(blog => tagFilter ? 
            (blog.tags && blog.tags.findIndex(t => t.tagName === tagFilter) > -1) : true).map((blog, idx) => (
              <div key={blog.slug} className={styles.blogItem}>
                <span className={styles.time}>{moment(blog.created).fromNow()}</span>
                <Link to={`/blog/${blog.slug}`} className={styles.titleWrap}>
                  <h1 className={styles.blogTitle}>{blog.title}</h1>
                </Link>
                <span className={styles.blogDescription}>{blog.description}</span>
                <div className={styles.tagsWrap}>
                  {blog.tags && blog.tags.map(tag => (
                    <Link
                      to={`/blog/t/${tag.tagName}`}
                      key={tag.tagName}
                      style={{backgroundColor: tag.bgColor, color: tag.color}}
                      className={styles.tagItem}
                    >
                      <span>
                        {`#${tag.tagName} `}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )   
  }
}
