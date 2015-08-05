import React from 'react';

class BannerImage extends React.Component {
  render() {
    let link = this.props.link ? this.props.link : '#';
    let onTouchBannerLink = this.props.onTouchBannerLink ? this.props.onTouchBannerLink : false;

    return (
      <a className="v-banner__link" href={link} onTouchTap={onTouchBannerLink} onClick={onTouchBannerLink}>
        <img className="v-banner__img" src={this.props.imageUrl} width="100%" alt={this.props.altText}/>
      </a>
    );
  }
}

export default BannerImage;
