import React from 'react';
import { editable } from 'vtex-editor';
import './style.scss';
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
      <div className="Banner col-xs-12">
        <BannerImage {...settings}/>
      </div>
    );
  }
}

export default Banner;
