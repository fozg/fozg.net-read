import React from 'react'

import SideNav from '../components/SideNav';
import BlogContent from '../components/BlogContent';
import AuthorBox from '../components/AuthorBox';
// import Conversations from '../components/Conversations';

import styles from './BlogDetail.module.scss';

export default class BlogDetail extends React.Component {
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
      <>
        <div className="container">
          <div className="row" style={{marginTop: 20}}>
            <div className={styles.blogContent+ " col-12 col-lg"}>
              <BlogContent slug={slug} key={slug} onBlogLoaded={this._onBlogLoaded}/>
            </div>
            <div className={styles.sidebar + ""}>
              <div className={styles.sticky}>
                <AuthorBox author={blog ? blog.author : null} />
                {blog && <SideNav author={blog.author} />}
              </div>
            </div>
          </div>
        </div>
        {/* {blog && <Conversations></Conversations>} */}
      </>
    )
  }
}
