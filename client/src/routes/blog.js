import React from 'react'

import SideNav from '../components/SideNav';
import BlogContent from '../components/BlogContent';
import AuthorBox from '../components/AuthorBox';
import Conversations from '../components/Conversations';

import styles from './Blog.module.scss';

export default class RenderBlog extends React.Component {
  // state = {
  //   isBlogLoaded : false
  // }

  render () {
    const slug = this.props.match.params.slug;
    
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="blogWrap">
              <BlogContent slug={slug} key={slug} />
            </div>
            <div className={styles.sidebar}>
              <AuthorBox />
              
              <SideNav />
            </div>
          </div>
        </div>
        <Conversations></Conversations>
      </div>
    )
  }
}
