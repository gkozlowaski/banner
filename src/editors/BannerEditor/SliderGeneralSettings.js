import React from 'react';

class SliderGeneralSettings extends React.Component {
  changeDots = () => {
    const dots = !this.props.settings.dots;
    const slider = Object.assign({}, this.props.settings, { dots });
    this.props.updateSettings({ slider });
  }

  changeInfinite = () => {
    const infinite = !this.props.settings.infinite;
    const slider = Object.assign({}, this.props.settings, { infinite });
    this.props.updateSettings({ slider });
  }

  changeSpeed = (e) => {
    const speed = parseInt(e.target.value, 10);

    if (speed < 0) {
      return;
    }

    const slider = Object.assign({}, this.props.settings, { speed });
    this.props.updateSettings({ slider });
  }

  incrementQuantity = (e) => {
    e.preventDefault();
    const speed = this.props.settings.speed + 50;
    const slider = Object.assign({}, this.props.settings, { speed });
    this.props.updateSettings({ slider });
  }

  decrementQuantity = (e) => {
    e.preventDefault();
    const speed = this.props.settings.speed - 50;
    const slider = Object.assign({}, this.props.settings, { speed });
    this.props.updateSettings({ slider });
  }

  render() {
    const settings = this.props.settings;

    return (
      <form className="BannerEditor__form-wrapper">
        <div className="BannerEditor__form">
          <h2 className="BannerEditor__title--big">
            Slider
          </h2>
          <div>
            <span className="BannerEditor__title">
              Selection Dots
            </span>
            <input
              type="checkbox"
              name="slider-dots"
              id="slider-dots-yes"
              className="BannerEditor__toggle BannerEditor__toggle--light"
              checked={settings.dots}
              onChange={() => {}}
            />
            <label
              className="BannerEditor__toggle-button"
              for="slider-dots-yes"
              onClick={this.changeDots}
            />
          </div>
          <br />
          <div>
            <span className="BannerEditor__title">
              Scroll infinito
            </span>
            <input
              type="checkbox"
              name="slider-dots"
              id="infinite-yes"
              className="BannerEditor__toggle BannerEditor__toggle--light"
              checked={settings.infinite}
              onChange={() => {}}
            />
            <label
              className="BannerEditor__toggle-button"
              for="infinite-yes"
              onClick={this.changeInfinite}
            />
          </div>
          <br />
          <div className="BannerEditor__quant-field">
            <p className="BannerEditor__title">
              Transition Speed (ms)
            </p>
            <div className="BannerEditor__quant-selector">
              <button
                className="BannerEditor__quant-button--left"
                onClick={this.decrementQuantity}
                disabled={settings.speed === 0}
              >
                -
              </button>
              <input
                id="speed"
                className="BannerEditor__quant-selector__input"
                name="quantity"
                type="text"
                value={settings.speed}
                onChange={this.changeSpeed}
              />
              <button
                className="BannerEditor__quant-button--right"
                onClick={this.incrementQuantity}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SliderGeneralSettings;
