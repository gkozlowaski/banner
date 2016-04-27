import React from 'react';
import './style.scss';
import { stores } from 'sdk';

const Img = stores.ComponentStore.state.getIn(['Img@vtex.storefront-sdk', 'constructor']);

class BannerImage extends React.Component {
  static defaultProps = {
    imageUrl: '//i.imgur.com/7ou79ca.png',
    link: '//www.google.com.br',
    altText: ''
  }

  render() {
    let link = this.props.link ? this.props.link : '#';
    let onTouchBannerLink = this.props.onTouchBannerLink ?
      this.props.onTouchBannerLink : null;

    return (
      <div className="BannerImage">
        <a
          className="BannerImage__link"
          href={link}
          onClick={onTouchBannerLink}
        >
        <Img
          className="BannerImage__img"
          src={this.props.imageUrl}
          alt={this.props.altText}
        />
        </a>
      </div>
    );
  }
}

export default BannerImage;
