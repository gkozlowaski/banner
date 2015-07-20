import storefront from 'storefront';
import React from 'react';
let connectToStores = storefront.import('connectToStores');
import classNames from 'classnames';
import style from '../style/Banner.less'; // eslint-disable-line

@connectToStores([
  storefront.flux.stores.ComponentStore
])
class BannerEditMode extends React.Component {
  static storefront = {
    id: 'BannerEditMode'
  }

  onClickContainer = () => {
    storefront.flux.actions.EditorActions.openAdmin({
      component: 'BannerEditor',
      route: this.props.route,
      id: this.props.id
    });
  }

  render() {
    const component = this.props.ComponentStore.getIn([this.props.route, this.props.id]).toJS();
    const src = component.settings.url;

    let classes = classNames(
      'v-banner', 'v-banner--edit'
    );

    if (!component) {
      return null;
    }
    return (
      <div className={classes} onClick={this.onClickContainer}>
        <img src={src} width="100%"/>
      </div>
    );
  }
}

export default BannerEditMode;
