import React, { Component } from 'react';
import './lazyload.css';
import { width } from 'window-size';

class LazyImage extends Component {

  constructor(props) {
    super(props);
    this.ironImageHd = null;
    this.ironImage = null;
  }

  componentDidMount() {
        
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute(
        'style',
        `background-image: url('${this.props.srcLoaded}')`
      );
      this.ironImageHd.classList.add('iron-image-fade-in');
      this.ironImage.classList.add('iron-image-pre-fade-out');
    }

  };

  render() {
    return (
      <div className="iron-image-container" >
      
        <div 
          className="iron-image-loaded"
          ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}>
          <img src={this.props.srcPreload} style={{width: '100%',visibility: 'hidden',imageOrientation: '0deg'}}/>
        </div>
        <div 
          className="iron-image-preload" 
          ref={imageLoadedElem => this.ironImage = imageLoadedElem}
          style={{ backgroundImage: `url('${this.props.srcPreload}')`, filter:'blur(5px)'}}>
          <img src={this.props.srcPreload} style={{width: '100%',visibility: 'hidden',imageOrientation: '0deg'}}/>
        </div>
      
      </div>
    )
  }

}

export default LazyImage;