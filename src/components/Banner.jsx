import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import style from '../style/Banner.less'; // eslint-disable-line

@connectToStores([
  dispatcher.stores.SettingsStore,
  dispatcher.stores.ComponentStore,
  dispatcher.stores.EditorStore
])
class Banner extends React.Component {
  render() {
    const editMode = this.props.EditorStore.get('isActive');
    const EditComponent = this.props.ComponentStore.getIn(['BannerEditMode', 'constructor']);
    if (editMode && EditComponent) {
      return <EditComponent {...this.props}/>;
    }

    const component = null; //this.props.SettingsStore.getIn([this.props.route, this.props.id]);

    if (!component) {
      return null;
    } else {
      let url = component.getIn(['settings', 'url']);

      return (
        <div className="v-banner">
          <img className="v-banner__img" src={url} width="100%"/>
        </div>
      );
    }
  }
}

export default Banner;
