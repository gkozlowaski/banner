import React from 'react';
import './style.scss';
import SliderGeneralSettings from './SliderGeneralSettings';
import SliderImagesSettings from './SliderImagesSettings';

class BannerEditor extends React.Component {
  constructor(props) {
    super(props);
    let settings = this.props.settings ? this.props.settings.toJS() : {};

    let images = settings.images ? settings.images : [];
    let sliderSettings = settings.slider ? settings.slider : {};

    this.state = {
      slider: {
        dots: sliderSettings.dots !== undefined ? sliderSettings.dots : true,
        infinite: sliderSettings.infinite !== undefined ? sliderSettings.infinite : true,
        speed: sliderSettings.speed || 500
      },
      images
    };
  }

  handleSave = () => {
    let images = this.state.images.filter(function(image) {
      return image.url != null || image.alt != null || image.link != null;
    });
    this.state.images = images;
    this.props.saveSettings(this.state);
  }

  updateGeneralSettings(slider) {
    let _state = {
      ...this.state,
      ...slider
    }
    this.setState(_state)
  }

  updateImagesSettings(images) {
    let _state = {
      ...this.state,
      ...images
    }
    this.setState(_state)
  }

  render() {
    let ActionBar = this.props.actionBar;
    let settings = this.state.slider;
    let images = this.state.images;

    return (
      <div className="BannerEditor">
        <div className="BannerEditor__wrapper">
          <div className="BannerEditor__editor">
            <div>
              <SliderGeneralSettings
                settings={settings}
                updateSettings={this.updateGeneralSettings.bind(this)}
              />
              <SliderImagesSettings
                images={images}
                updateSettings={this.updateImagesSettings.bind(this)}
              />
            </div>
          </div>
          <ActionBar
            id={this.props.componentProps.id}
            onSave={this.handleSave.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default BannerEditor;
