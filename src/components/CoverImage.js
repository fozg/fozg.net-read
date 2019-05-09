import React from 'react';
import styles from './CoverImage.module.scss';

export default class CoverImage extends React.Component {

  state = {
    height: 0,
    imageTop: 0,
    opacity: 0
  }

  componentDidMount () {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount () {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = (e) => {
    this.setState({
      imageTop: -window.scrollY / ( 2 * window.innerHeight / this.imageHeight)
    })
  }

  onLoad = e => {
    // console.log(e.target.naturalWidth) // console.log(e.target.naturalHeight)
    
    this.imageHeight = e.target.height;
    this.imageWidth = e.target.width;
    setTimeout(() => {
      
      if (this.imageHeight > window.innerHeight) {
        this.setState({height: window.innerHeight - 200,  opacity: 1})
      } else {
        this.setState({height: this.imageHeight, opacity: 1})
      }
    }, 300);
  }

  

  render () {
    const {height, imageTop, opacity} = this.state;
    const {url} = this.props;

    return (
      <div 
        style={{
          height,
          opacity
        }} 
        className={styles.CoverImage}
      >
        <img src={url} onLoad={this.onLoad} style={{width: '100%', position: 'absolute', top: imageTop}}/>
      </div>
    )
  }
}
