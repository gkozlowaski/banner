import storefront from 'storefront';
import React from 'react';
import connectToStores from 'utils/connectToStores';

@connectToStores([
  storefront.flux.stores.ShopStore,
  storefront.flux.stores.ComponentStore,
  storefront.flux.stores.EditorStore
])
class Banner extends React.Component {
  render() {
    const editMode = this.props.EditorStore.get('edit');
    const component = this.props.ComponentStore.get(this.props.route).get(this.props.id).toJS();
    const containerStyle = editMode ? { backgroundColor: 'rgba(0,0,200,0.5)' } : {};
    const imageStyle = editMode ? { opacity: '0.2' } : {};
    if (!component) {
      return null;
    }
    const src = component.settings.url;
    return (
      <div style={containerStyle} className="storefront-banner">
        <img style={imageStyle} src={src}/>
      </div>
    );
  }
}

export default Banner;
