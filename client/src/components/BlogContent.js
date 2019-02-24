import React from 'react'
import moment from 'moment';
import BlogLoader from './BlogLoader';

import Avatar from './Avatar';
import FixedBlogTitle from './FixedBlogTitle';
import Tags from './Tags';

import {callAPI} from '../lib';
import {API} from '../consts';

import './BlogContent.zlobal.scss';
export default class BlogContent extends React.Component {
  state = {
    blog: null,
    isLoading: true
  }

  componentDidMount () {
    if (!window.isFirstLoad) {
      setTimeout(() => {
        // make sure delay 500ms everytime when load new blog
        if (this.state.blog) {
          this.setState({isLoading: false})
        } else {
          this.loaded500 = true
        }
      }, 500);
    } else {
      this.loaded500 = true
    }
    new callAPI(API.BLOG, "GET", {slug: this.props.slug}).call().then(
      result => {
        if (window.isFirstLoad) {
          // dont need to reload the body when first load
          // cause server already render it
          this.setState({blog: {...result, body: null, isLoading: !this.loaded500}});
        } else {
          this.setState({blog: result, isLoading: !this.loaded500});
        }
        this.props.onBlogLoaded && this.props.onBlogLoaded(result);
        if (result.title) {
          document.title=result.title;
        }
      }
    ).catch(e => {
      // console.log(e)
    })

    if (window.isFirstLoad) {
      window.isFirstLoad = false;
    }
  }

  render () {
    const {
      blog,
      isLoading
    } = this.state;

    if (isLoading) {
      return <BlogLoader />
    }
    
    if (window.isFirstLoad && this.props.slug) {      
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
      <div className={"content"}>
        <FixedBlogTitle title={blog.title} author={blog.author} />
        <h1 className={"content-title"}>{blog.title}</h1>
        <div className={"content-authorLine"}>
          <Avatar {...blog.author} size="small" />
          {blog.created && <div className={"content-created"}> • <em className={'content-created--em'}>{moment(blog.created).fromNow()}</em></div>}
        </div>
        {blog.tags && <>
          <div style={{height: 10}} />
          <Tags tags={blog.tags} />
        </>}
        <div id="clientContent">
          {blog &&
            <div dangerouslySetInnerHTML={{__html: blog.body}} />
          }
        </div>
      </div>
    )
  }
}
