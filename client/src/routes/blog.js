import React from 'react'

import Sidebar from '../components/Sidebar';
import BlogContent from '../components/BlogContent';
import AuthorBox from '../components/AuthorBox';

import styles from './Blog.module.scss';

export default class RenderBlog extends React.Component {
  
  render () {

    const slug = this.props.match.params.slug;
    
    return (
      <div className="container">
        <div className="row">
          <div className="blogWrap">
            <BlogContent slug={slug} key={slug} />
          </div>
          <div className={styles.sidebar}>
            <AuthorBox />
            <Sidebar />
          </div>
        </div>
      </div>
    )
  }
}
