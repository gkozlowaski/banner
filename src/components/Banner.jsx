import storefront from 'storefront';
import React from 'react';
import connectToStores from 'utils/connectToStores';

@connectToStores([
  storefront.flux.stores.ShopStore,
  storefront.flux.stores.ComponentStore
])
class Banner extends React.Component {
  render() {
    const component = this.props.ComponentStore.get(this.props.route).get(this.props.id).toJS();
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
}

export default Banner;
