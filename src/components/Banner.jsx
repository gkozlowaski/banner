import storefront from 'storefront';
import React from 'react';
import connectToStores from 'utils/connectToStores';

const stores = [
  storefront.flux.stores.ShopStore,
  storefront.flux.stores.ComponentStore
];

let Banner = React.createClass({
  render() {
    const component = this.props.ComponentStore.toJS()[this.props.route][this.props.id];
    if (!component) {
      return null;
    }
    const src = component.settings.url;
    return (
      <div className="storefront-banner">
        <img src={src}/>
      </div>
    );
  }
});

export default connectToStores(stores)(Banner);
