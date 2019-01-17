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
  state = {
    blog: null
  }

  _onBlogLoaded = blog => {
    this.setState({blog})
  }

  render () {
    const slug = this.props.match.params.slug;
    const {blog} = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className={styles.blogContent}>
              <BlogContent slug={slug} key={slug} onBlogLoaded={this._onBlogLoaded}/>
            </div>
            <div className={styles.sidebar}>
              <div className={styles.sticky}>
                <AuthorBox author={blog ? blog.author : null} />
                {blog && <SideNav author={blog.author} />}
              </div>
            </div>
          </div>
        </div>
        {/* {blog && <Conversations></Conversations>} */}
      </div>
    )
  }
}
