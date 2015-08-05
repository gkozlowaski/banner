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
      url: config ? config.get('url') : null,
      // Created state for isAdding -- the screen will only re-render if the variable is in a state
      isAdding: false
    };
  }

  changeUrl = (e) => {
    this.setState({ url: e.target.value });
  }

  handleNewImage = () => {
    this.setState({ isAdding: !this.state.isAdding });
  }

  handleSave = () => {
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
    //console.log(this.state.isAdding);

    return (
      <div className="v-banner-ed__editor">
        <div className="v-banner-ed__editor__wrapper">
          <div className="v-banner-ed__current-banner">
            <span className="v-banner-ed__banner-placeholder-text">
              Nenhuma imagem configurada
            </span>
          </div>
          <form className="v-banner-ed__form">
            <div className="v-banner-ed__form__wrapper">
              <div className="v-banner-ed__form__url">
                <label htmlFor="url">URL da Imagem</label>
                <input id="url" className="form-control" type="url"
                       value={this.state.url} onChange={this.changeUrl} placeholder="URL"/>
              </div>
              <div className="v-banner-ed__form__link">
                <label htmlFor="alt">Link do Banner</label>
                <input id="alt" className="form-control" type="url"
                      onChange={this.changeLink} placeholder="Link do Banner"/>
              </div>
              <div className="v-banner-ed__form__alt">
                <label htmlFor="alt">Alt-text da imagem</label>
                <input id="alt" className="form-control" type="text"
                      onChange={this.changeAlt} placeholder="Alt-text"/>
              </div>
            </div>
          </form>
        </div>
        <ActionBar onSave={this.handleSave}/>
      </div>
    );
  }
}

export default BannerEditor;
