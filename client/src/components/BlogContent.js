import React from 'react'
import moment from 'moment';

import Avatar from './Avatar';
import FixedBlogTitle from './FixedBlogTitle';

import {callAPI} from '../lib';
import {API} from '../consts';

import './BlogContent.zlobal.scss';
export default class BlogContent extends React.Component {
  state = {
    blog: null
  }

  componentDidMount () {    
    new callAPI(API.BLOG, "GET", {slug: this.props.slug}).call().then(
      result => {
        if (window.isFirstLoad) {
          // dont need to reload the body when first load
          // cause server already render it
          this.setState({blog: {...result, body: null}});
        } else {
          this.setState({blog: result});
        }
        this.props.onBlogLoaded && this.props.onBlogLoaded(result);
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
      blog 
    } = this.state;

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
        <div id="clientContent">
          {blog &&
            <div dangerouslySetInnerHTML={{__html: blog.body}} />
          }
        </div>
      </div>
    )
  }
}
