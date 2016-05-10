import React from 'react';
import './style.scss';

class BannerPlaceholder extends React.Component {
  render() {
    return (
      <div className="BannerPlaceholder">
        <span className="BannerPlaceholder__text">No image configured</span>
      </div>
    );
  }
}

export default BannerPlaceholder;
