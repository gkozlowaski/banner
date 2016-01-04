import React from 'react';
import { editable } from 'vtex-editor';
import './style.scss';
import BannerImage from './BannerImage';
import Slider from 'react-slick';
import 'assets/slick/slick.scss';
import 'assets/slick/slick-theme.scss';

@editable({
  name: 'Banner@vtex.banner',
  title: 'Banner'
})
class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.settings ? this.props.settings.toJS() : {};
  }

  render() {
    let images = this.state.images || [];
    let sliderSettings = this.state.slider;

    return (
      <div className='banner'>
        <Slider {...sliderSettings}>
          {images.map(function(image, i){
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
