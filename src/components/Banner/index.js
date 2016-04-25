import 'matchmedia-polyfill';
import React from 'react';
import { editable } from 'vtex-editor';
import './style.scss';
import BannerImage from './BannerImage';
import Slider from 'react-slick';
import 'utils/slick/slick.scss';
import 'utils/slick/slick-theme.scss';

const getViewPort = () => {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  };
}

const fillImages = (images) => {
  var output = [{ data: [] }, { data: [] }];
  images.forEach((image) => {
    if (image.mobile) {
      output[0].data.push(image);
    } else {
      output[1].data.push(image);
    }
  });
  return output;
}

@editable({
  name: 'Banner@vtex.banner',
  title: 'Banner'
})
class Banner extends React.Component {
  constructor(props) {
    super(props);
    const settings = this.props.settings ? this.props.settings.toJS() : {};
    this.state = { ...settings, viewport: getViewPort()};
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({ viewport: getViewPort() });
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  }

  isOnMobile = () => {
    return this.state.viewport.width < 800;
  }

  render() {
    const imageSettings = this.state.images || [];
    const images = fillImages(imageSettings);
    const sliderSettings = this.state.slider || {};
    sliderSettings.draggable = false;

    if (images.length === 0) {
      sliderSettings.arrows = false;
    }

    const index = this.isOnMobile() ? 0 : 1;
    return (
      <div className='banner'>
        <Slider {...sliderSettings}>
          {images[index].data.map(function(image, i){
            return (
              <div key={i}>
                <BannerImage imageUrl={image.url} link={image.link} altText={image.alt}/>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default Banner;
