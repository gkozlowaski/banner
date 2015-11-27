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
  // MOCK
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        slider: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        },
        images: [
          {
            url: 'http://i.imgur.com/7ou79ca.png',
            link: 'http://www.google.com',
            alt: 'Olar ma frend'
          },
          {
            url: 'http://i.imgur.com/7ou79ca.png',
            link: 'http://www.google.com',
            alt: 'Olar ma frend'
          },
          {
            url: 'http://i.imgur.com/7ou79ca.png',
            link: 'http://www.google.com',
            alt: 'Olar ma frend'
          }
        ]
      }
    }
  }

  render() {
    let images = this.state.settings.images;
    let sliderSettings = this.state.settings.slider;

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
