import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import style from '../style/BannerEditor.less'; // eslint-disable-line

@connectToStores([
  dispatcher.stores.ShopStore,
  dispatcher.stores.SettingsStore
])
class BannerEditor extends React.Component {
  constructor(props) {
    super(props);
    let config = props.SettingsStore.getIn([this.props.route, this.props.id, 'settings']);

    this.state = {
      url: config ? config.get('url') : null
    };
  }

  changeUrl = (e) => {
    this.setState({ url: e.target.value });
  }

  onClickSave = () => {
    dispatcher.actions.SettingsActions.saveComponent({
      accountName: this.props.ShopStore.get('accountName'),
      route: this.props.route,
      component: 'Banner@vtex.storefront-banner',
      id: this.props.id,
      settings: this.state
    });
    dispatcher.actions.EditorActions.closeEditor();
  }

  render() {
    let ActionBar = this.props.actionBar;

    return (
      <div className="v-banner-ed__editor">
        <div className="v-banner-ed__editor__wrapper">
          <h1 className="v-banner-ed__title">Banner</h1>
          <div className="v-banner-ed__current-banner">
          <span className="v-banner-ed__banner-placeholder-text">Nenhuma imagem selecionada</span>
          </div>
          <div className="v-banner-ed__add">
            <button id="add" className="v-banner-ed__add-button"></button>
            <label htmlFor="add" className="v-banner-ed__add-label">Adicionar nova imagem</label>
          </div>
            <form className="v-banner-ed__form">
                <div className="v-banner-ed__form__url">
                  <label htmlFor="url">URL da imagem</label>
                  <input id="url" className="form-control" type="text"
                         value={this.state.url} onChange={this.changeUrl} placeholder="URL"/>
                </div>
                <div className="v-banner-ed__form__alt">
                  <label htmlFor="alt">Alt-text da imagem</label>
                  <input id="alt" className="form-control" type="text"
                        onChange={this.changeAlt} placeholder="Alt-text"/>
                </div>
            </form>
          </div>
          <ActionBar onSave={this.onClickSave}/>
        </div>
    );
  }
}

export default BannerEditor;
