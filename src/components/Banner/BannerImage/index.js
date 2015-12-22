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
      <div className="BannerImage">
        <a className="BannerImage__link" href={link} onTouchTap={onTouchBannerLink} onClick={onTouchBannerLink}>
          <img className="BannerImage__img" src={this.props.imageUrl} alt={this.props.altText}/>
        </a>
      </div>
    );
  }
}

export default BannerImage;
