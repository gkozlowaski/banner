import storefront from 'storefront';
import React from 'react';
import connectToStores from 'utils/connectToStores';

@connectToStores([
  storefront.flux.stores.ShopStore,
  storefront.flux.stores.ComponentStore,
  storefront.flux.stores.EditorStore
])
class BannerAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.ComponentStore.get(this.props.route).get(this.props.id).get('settings').get('url')
    };
  }

  changeUrl(e) {
    this.setState({ url: e.target.value });
  }

  onClickSave() {
    storefront.flux.actions.ComponentActions.saveSettings({
      accountName: 'basedevmkp',
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
        <p>banner admin, fera!</p>
        <input type="text" value={this.state.url} onChange={this.changeUrl.bind(this)}/>
        <button onClick={this.onClickSave.bind(this)}>Salvar</button>
      </div>
    );
  }
}

export default BannerAdmin;
