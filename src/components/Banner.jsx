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

    const component = this.props.SettingsStore.getIn([this.props.route, this.props.id]);

    if (!component) {
      return null;
    } else {
      let imageUrl = component.getIn(['settings', 'url']);
      let link = component.getIn(['settings', 'link']);
      let altText = component.getIn(['settings', 'altText']);

      return (
        <div className="v-banner">
          <a className="v-banner__link" href={link}>
            <img className="v-banner__img" src={imageUrl} width="100%" alt={altText}/>
          </a>
        </div>
      );
    }
  }
}

export default Banner;
