import storefront from 'storefront';
import React from 'react';
let connectToStores = storefront.import('connectToStores');
import style from '../style/Banner.less'; // eslint-disable-line

@connectToStores([
  storefront.flux.stores.ComponentStore,
  storefront.flux.stores.EditorStore
])
class Banner extends React.Component {
  static storefront = {
    id: 'Banner',
    pluggable: true
  }

  render() {
    const editMode = this.props.EditorStore.get('activeMode') === 'edit';
    if (editMode && storefront.import('BannerEditMode')) {
      let EditComponent = storefront.import('BannerEditMode');
      return <EditComponent {...this.props}/>;
    }

    const component = this.props.ComponentStore.getIn([this.props.route, this.props.id]).toJS();
    const src = component.settings.url;

    if (!component) {
      return null;
    }
    return (
      <div className="v-banner">
        <img src={src} width="100%"/>
      </div>
    );
  }
}

export default Banner;
