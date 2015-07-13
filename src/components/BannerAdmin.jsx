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
    let config = props.ComponentStore.getIn([this.props.route, this.props.id, 'settings']);

    this.state = {
      url: config.get('url')
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
    storefront.flux.actions.EditorActions.exitEditMode();
  }

  render() {
    return (
      <div className="storefront-banner-admin">
        <input type="text" value={this.state.url} onChange={this.changeUrl.bind(this)}/>
        <button onClick={this.onClickSave.bind(this)}>Salvar</button>
      </div>
    );
  }
}

export default BannerAdmin;
