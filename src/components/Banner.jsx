import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import style from '../styles/Banner.less'; // eslint-disable-line
import BannerImage from './BannerImage';

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

    const component = this.props.SettingsStore.getIn([this.props.route, this.props.id]);

    if (!component) {
      return null;
    } else {
      let imageUrl = component.getIn(['settings', 'url']);
      let link = component.getIn(['settings', 'link']);
      let altText = component.getIn(['settings', 'altText']);

      return (
        <div className="v-banner">
          <BannerImage imageUrl={imageUrl} link={link} altText={altText}/>
        </div>
      );
    }
  }
}

export default Banner;
