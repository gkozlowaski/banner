import React from 'react';
import { editable } from 'vtex-editor';
import BannerImage from './BannerImage';
import './style.scss';

@editable({
  name: 'Banner@vtex.banner',
  title: 'Banner'
})
class Banner extends React.Component {
  render() {
    let settings;
    if (this.props.settings) {
      settings = this.props.settings.toJS();
    }

    return (
      <div className="Banner">
        <BannerImage imageUrl={imageUrl} link={link} altText={altText}/>
      </div>
    );
  }
}

export default Banner;
