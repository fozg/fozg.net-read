import React from 'react'

import Sidebar from '../components/Sidebar';
import BlogContent from '../components/BlogContent';

export default class RenderBlog extends React.Component {
  
  render () {

    const slug = this.props.match.params.slug;
    
    return (
      <div className="container">
        <div className="row">
          <div className="blogWrap">
            <BlogContent slug={slug} key={slug} />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    )
  }
}
