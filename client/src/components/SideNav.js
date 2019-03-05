import React from 'react'
import { Link } from "react-router-dom";

import styles from './SideNav.module.scss';
import {callAPI} from '../lib';
import {API} from '../consts';
export default class SideNav extends React.Component {
  state = {
    blogs: []
  }

  componentDidMount () {
    new callAPI(API.BLOGS_BY_USER , "GET", {username: this.props.author.name}).call().then(
      blogs => {
        this.setState({blogs: blogs.slice(0, 5)})
      }
    )
  }

  render () {
    const {
      blogs
    } = this.state;
    
    return (
      <div>
        <h3>Other blogs</h3>
          <ul className={styles.sideNavList}>
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link to={`/blog/${blog.slug}`} className={styles.linkWrap}>
                  <strong>{blog.title}</strong>
                  <div style={{fontWeight: 600}}>{blog.tags && blog.tags.map(tag => (
                    <span to={"/blog/t/"+tag.tagName} key={tag.tagName} className={styles.tagItem}>
                      {`#${tag.tagName} `}
                    </span>
                  ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
              
      </div>
    )
  }
}