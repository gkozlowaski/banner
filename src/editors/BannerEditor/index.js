import React from 'react';
import './style.scss';
import BannerImage from 'components/Banner/BannerImage';
import BannerPlaceholder from './BannerPlaceholder';

class BannerEditor extends React.Component {
  constructor(props) {
    super(props);

    let settings = this.props.settings;
    this.state = {
      imageUrl: settings ? settings.get('imageUrl') : undefined,
      link: settings ? settings.get('link') : undefined,
      altText: settings ? settings.get('altText') : undefined
    };
  }

  changeImageUrl = (e) => {
    this.setState({ imageUrl: e.target.value });
  }

  changeLink = (e) => {
    this.setState({ link: e.target.value });
  }

  changeAltText = (e) => {
    this.setState({ altText: e.target.value });
  }

  handleSave = () => {
    this.props.saveSettings(this.state);
  }

  onTouchBannerLink = (e) => {
    e.preventDefault();
  }

  render() {
    let ActionBar = this.props.actionBar;

    let currentBanner;
    if (this.state.imageUrl) {
      let imageUrl = this.state.imageUrl;
      let altText = this.state.altText;
      let link = this.state.link;

      currentBanner = <BannerImage imageUrl={imageUrl} link={link} altText={altText} onTouchBannerLink={this.onTouchBannerLink}/>;
    } else {
      currentBanner = <BannerPlaceholder/>;
    }

    return (
      <div className="BannerEditor">
        <div className="BannerEditor__wrapper">
          {currentBanner}
          <form className="BannerEditor__form">
            <div className="BannerEditor__form-wrapper">
              <div className="BannerEditor__form-url">
                <label htmlFor="url">URL da imagem</label>
                <input id="url" className="form-control" type="url"
                       value={this.state.imageUrl} onChange={this.changeImageUrl} placeholder="URL"/>
              </div>
              <div className="BannerEditor__form-link">
                <label htmlFor="alt">Link do banner</label>
                <input id="alt" className="form-control" type="url"
                      value={this.state.link} onChange={this.changeLink} placeholder="Link do Banner"/>
              </div>
              <div className="BannerEditor__form-alt">
                <label htmlFor="alt">Alt-text da imagem</label>
                <input id="alt" className="form-control" type="text"
                      value={this.state.altText} onChange={this.changeAltText} placeholder="Alt-text"/>
              </div>
            </div>
          </form>
        </div>
        <ActionBar onSave={this.handleSave.bind(this)}/>
      </div>
    );
  }
}

export default BannerEditor;
