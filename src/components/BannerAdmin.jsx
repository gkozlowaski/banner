import storefront from 'storefront';
import React from 'react';
import connectToStores from 'utils/connectToStores';

@connectToStores([
  storefront.flux.stores.ShopStore,
  storefront.flux.stores.ComponentStore,
  storefront.flux.stores.EditorStore
])
class BannerAdmin extends React.Component {
  onClickSave() {
    storefront.flux.actions.EditorActions.closeAdmin();
  }

  render() {
    return (
      <div className="storefront-banner-admin">
        <p>banner admin, fera!</p>
        <button onClick={this.onClickSave.bind(this)}>Salvar</button>
      </div>
    );
  }
}

export default BannerAdmin;
