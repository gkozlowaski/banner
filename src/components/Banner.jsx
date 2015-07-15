import storefront from 'storefront';
import React from 'react';
import connectToStores from 'utils/connectToStores';
import classNames from 'classnames';
import style from '../style/Banner.less'; // eslint-disable-line

@connectToStores([
  storefront.flux.stores.ShopStore,
  storefront.flux.stores.ComponentStore,
  storefront.flux.stores.EditorStore
])
class Banner extends React.Component {
  onClickContainer() {
    const editMode = this.props.EditorStore.get('activeMode') === 'edit';
    if (editMode) {
      storefront.flux.actions.EditorActions.openAdmin({
        component: 'BannerAdmin',
        route: this.props.route,
        id: this.props.id
      });
    }
  }

  render() {
    const editMode = this.props.EditorStore.get('activeMode') === 'edit';
    const component = this.props.ComponentStore.getIn([this.props.route, this.props.id]).toJS();
    const src = component.settings.url;

    let classes = classNames(
      'v-banner',
      { 'v-banner--edit': editMode }
    );

    if (!component) {
      return null;
    }
    return (
      <div className={classes} onClick={this.onClickContainer.bind(this)}>
        <img src={src} width="100%"/>
      </div>
    );
  }
}

export default Banner;
