import React from 'react';

class SliderGeneralSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  stringToBoolean (string) {
    return string === 'true';
  }

  changeDots (e) {
    let dots = this.stringToBoolean(e.target.value);
    let slider = Object.assign({}, this.props.settings, { dots });
    this.props.updateSettings({slider});
  }

  changeInfinite (e) {
    let infinite = this.stringToBoolean(e.target.value);
    let slider = Object.assign({}, this.props.settings, { infinite });
    this.props.updateSettings({slider});
  }

  changeSpeed (e) {
    let speed = e.target.value;
    let slider = Object.assign({}, this.props.settings, { speed });
    this.props.updateSettings({slider});
  }

  render() {
    let settings = this.props.settings;

    return (
      <form className="v-banner-ed__form">
        <div className="v-banner-ed__form__wrapper">
          <h2>Configurações do Slider</h2>
          <div className="v-banner-ed__form__slider-dots">
            <h4>Exibir pontos para navegação?</h4>
            <label className="radio-inline">
              <input type="radio" name="slider-dots" id="slider-dots-yes" checked={settings.dots} onChange={this.changeDots.bind(this)} value="true" />
              Sim
            </label>
            <label className="radio-inline">
              <input type="radio" name="slider-dots" id="slider-dots-false" checked={!settings.dots} onChange={this.changeDots.bind(this)} value="false" />
              Não
            </label>
          </div>

          <div className="v-banner-ed__form__slider-infinite">
            <h4>Retornar ao primeiro item ao chegar no final?</h4>
            <label className="radio-inline">
              <input type="radio" name="infinite" id="infinite-yes" checked={settings.infinite} onChange={this.changeInfinite.bind(this)} value="true" />
              Sim
            </label>
            <label className="radio-inline">
              <input type="radio" name="infinite" id="infinite-false" checked={!settings.infinite} onChange={this.changeInfinite.bind(this)} value="false" />
              Não
            </label>
          </div>

          <div className="v-banner-ed__form__slider-speed">
            <h4>Velocidade da transicação em milisegundos</h4>
            <input id="speed" className="form-control" type="number"
                  value={settings.speed} onChange={this.changeSpeed.bind(this)} />
          </div>
        </div>
      </form>
    );
  }
}

export default SliderGeneralSettings;
