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
        this.setState({blogs})
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
                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                <div style={{fontWeight: 600}}>{blog.tags && blog.tags.map(tag => (
                  <Link to={"/blog/t/"+tag.tagName} key={tag.tagName}><span
                    className={styles.tagItem}
                  >
                    {`#${tag.tagName} `}
                  </span></Link>
                ))}</div>
              </li>
            ))}
          </ul>
              
      </div>
    )
  }
}