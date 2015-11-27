import React from 'react';
import './style.scss';
import BannerImage from 'components/Banner/BannerImage';
import BannerPlaceholder from './BannerPlaceholder/index.js';
import SliderGeneralSettings from './SliderGeneralSettings'


class BannerEditor extends React.Component {
  constructor(props) {
    super(props);

    let settings = this.props.settings ? this.props.settings : {};
    let images = this.props.images ? this.props.images : [];
    let sliderSettings = settings.slider ? settings.slider : {};

    this.state = {
      slider: {
        dots: sliderSettings.dots || true,
        infinite: sliderSettings.infinite || true,
        speed: sliderSettings.speed || 500
      },
      images
    };
  }

  handleSave = () => {
    this.props.saveSettings(this.state);
  }

  updateGeneralSettings(slider) {
    let _state = Object.assign({}, this.state, slider); 
    this.setState(_state)
  }

  render() {
    let ActionBar = this.props.actionBar;
    let settings = this.state.slider;

    return (
      <div className="v-banner-ed__editor">
        <div className="v-banner-ed__editor__wrapper">
          <SliderGeneralSettings settings={settings} updateSettings={this.updateGeneralSettings.bind(this)}  />
        </div>
        <ActionBar onSave={this.handleSave.bind(this)}/>
      </div>
    );
  }
}

export default BannerEditor;
