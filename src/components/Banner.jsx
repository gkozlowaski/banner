import storefront from 'storefront';
import React from 'react';
import connectToStores from 'utils/connectToStores';

@connectToStores([
  storefront.flux.stores.ShopStore,
  storefront.flux.stores.ComponentStore,
  storefront.flux.stores.EditorStore
])
class Banner extends React.Component {
  onClickContainer() {
    const editMode = this.props.EditorStore.get('edit');
    if (editMode) {
      storefront.flux.actions.EditorActions.openAdmin('BannerAdmin');
    }
  }

  render() {
    const editMode = this.props.EditorStore.get('edit');
    const component = this.props.ComponentStore.get(this.props.route).get(this.props.id).toJS();
    const imageStyle = editMode ? { backgroundColor: 'rgba(0,0,200,0.5)', opacity: '0.2' } : {};
    if (!component) {
      return null;
    }
    const src = component.settings.url;
    return (
      <div className="storefront-banner" onClick={this.onClickContainer.bind(this)}>
        <img style={imageStyle} src={src}/>
      </div>
    );
  }
}

export default Banner;
