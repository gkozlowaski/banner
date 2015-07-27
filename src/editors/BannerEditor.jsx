import React from 'react';
import { dispatcher, connectToStores } from 'sdk';

@connectToStores([
  dispatcher.stores.ShopStore,
  dispatcher.stores.SettingsStore
])
class BannerEditor extends React.Component {
  static storefront = {
    id: 'BannerEditor'
  }

  constructor(props) {
    super(props);
    let config = props.SettingsStore.getIn([this.props.route, this.props.id, 'settings']);

    this.state = {
      url: config.get('url')
    };
  }

  changeUrl = (e) => {
    this.setState({ url: e.target.value });
  }

  onClickSave = () => {
    dispatcher.actions.ComponentActions.saveSettings({
      accountName: this.props.ShopStore.get('accountName'),
      route: this.props.route,
      component: 'Banner@vtex.storefront-banner',
      id: this.props.id,
      settings: this.state
    });
    dispatcher.actions.EditorActions.closeAdmin();
  }

  render() {
    return (
      <div className="storefront-banner-admin">
        <input type="text" value={this.state.url} onChange={this.changeUrl}/>
        <button onClick={this.onClickSave}>Salvar</button>
      </div>
    );
  }
}

export default BannerEditor;
