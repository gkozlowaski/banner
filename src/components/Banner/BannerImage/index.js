import React from 'react';
import './style.scss';

class BannerImage extends React.Component {
  static defaultProps = {
    imageUrl: 'http://i.imgur.com/7ou79ca.png',
    link: 'http://www.google.com.br',
    altText: ''
  }

  render() {
    let link = this.props.link ? this.props.link : '#';
    let onTouchBannerLink = this.props.onTouchBannerLink ? this.props.onTouchBannerLink : null;

    return (
      <a className="BannerImage" href={link} onTouchTap={onTouchBannerLink} onClick={onTouchBannerLink}>
        <img src={this.props.imageUrl} width="100%" alt={this.props.altText}/>
      </a>
    );
  }
}

export default BannerImage;
