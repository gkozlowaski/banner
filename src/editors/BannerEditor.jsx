import storefront from 'storefront';
import React from 'react';
let connectToStores = storefront.import('connectToStores');

@connectToStores([
  storefront.flux.stores.ShopStore,
  storefront.flux.stores.ComponentStore
])
class BannerEditor extends React.Component {
  static storefront = {
    id: 'BannerEditor'
  }

  constructor(props) {
    super(props);
    let config = props.ComponentStore.getIn([this.props.route, this.props.id, 'settings']);

    this.state = {
      url: config.get('url')
    };
  }

  changeUrl = (e) => {
    this.setState({ url: e.target.value });
  }

  onClickSave = () => {
    storefront.flux.actions.ComponentActions.saveSettings({
      accountName: this.props.ShopStore.get('accountName'),
      route: this.props.route,
      component: 'Banner@vtex.storefront-banner',
      id: this.props.id,
      settings: this.state
    });
    storefront.flux.actions.EditorActions.closeAdmin();
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
