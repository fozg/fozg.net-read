import React from 'react'

import {callAPI} from '../lib';
import {API} from '../consts'

export default class BlogContent extends React.Component {
  state = {
    blog: null
  }

  componentDidMount () {
    console.log('window.isFirstLoad', window.isFirstLoad)
    if (!window.isFirstLoad) {
      new callAPI(API.BLOG, "GET", {slug: this.props.slug}).call().then(
        result => {
          console.log(result) 
          this.setState({blog: result})
        }
      ).catch(e => {
        console.log(e)
      })
    } else {
      window.isFirstLoad = false;
    }
  }

  render () {
    const {
      blog 
    } = this.state;

    // console.log(' render blog, window.isFirstLoad:', window.isFirstLoad)
    if (window.isFirstLoad && this.props.slug) {      
      // window.isFirstLoad = false;

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
      <div className="content">
        <h1>{blog.title}</h1>
        <div id="clientContent">
          {blog &&
            <div dangerouslySetInnerHTML={{__html: blog.body}} />
          }
        </div>
      </div>
    )
  }
}