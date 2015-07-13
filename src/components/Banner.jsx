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
      storefront.flux.actions.EditorActions.openAdmin({
        component: 'BannerAdmin',
        route: this.props.route,
        id: this.props.id
      });
    }
  }

  render() {
    const editMode = this.props.EditorStore.get('edit');
    const component = this.props.ComponentStore.getIn([this.props.route, this.props.id]).toJS();
    const imageStyle = editMode ? { backgroundColor: 'rgba(0,0,200,0.5)', opacity: '0.2' } : {};
    if (!component) {
      return null;
    }
    const src = component.settings.url;
    return (
      <div className="storefront-banner" style={{width: '100%'}} onClick={this.onClickContainer.bind(this)}>
        <img style={imageStyle} src={src} width="100%"/>
      </div>
    );
  }
}

export default Banner;
