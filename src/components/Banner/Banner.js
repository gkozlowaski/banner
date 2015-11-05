import React from 'react';
import { storefront } from 'sdk';
import './Banner.scss';
import BannerImage from './BannerImage';

@storefront({
  name: 'Banner@vtex.storefront-banner',
  title: 'Banner',
  editable: true
})
class Banner extends React.Component {
  render() {
    let imageUrl, link, altText;
    if (this.props.settings) {
      imageUrl = this.props.settings.get('imageUrl');
      link = this.props.settings.get('link');
      altText = this.props.settings.get('altText');
    }

    return (
      <div className="v-banner banner">
        <BannerImage imageUrl={imageUrl} link={link} altText={altText}/>
      </div>
    );
  }
}

export default Banner;
