import React from 'react';
import { editable } from 'vtex-editor';
import './Banner.scss';
import BannerImage from './BannerImage';

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
      <div className="v-banner banner">
        <BannerImage {...settings}/>
      </div>
    );
  }
}

export default Banner;
