import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import style from '../style/Banner.less'; // eslint-disable-line

@connectToStores([
  dispatcher.stores.SettingsStore,
  dispatcher.stores.ComponentStore,
  dispatcher.stores.EditorStore
])
class Banner extends React.Component {
  static storefront = {
    id: 'Banner',
    pluggable: true
  }

  render() {
    const editMode = this.props.EditorStore.get('isActive');
    const EditComponent = this.props.ComponentStore.getIn(['BannerEditMode', 'constructor']);
    if (editMode && EditComponent) {
      return <EditComponent {...this.props}/>;
    }

    const component = this.props.SettingsStore.getIn([this.props.route, this.props.id]);

    if (!component) {
      return null;
    }
    return (
      <div className="v-banner">
        <img src={component.getIn(['settings', 'url'])} width="100%"/>
      </div>
    );
  }
}

export default Banner;
