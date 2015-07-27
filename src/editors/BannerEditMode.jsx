import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import classNames from 'classnames';
import style from '../style/Banner.less'; // eslint-disable-line

@connectToStores([
  dispatcher.stores.SettingsStore
])
class BannerEditMode extends React.Component {
  onClickContainer = () => {
    dispatcher.actions.EditorActions.openEditor({
      component: 'BannerEditor',
      route: this.props.route,
      id: this.props.id
    });
  }

  render() {
    const component = this.props.SettingsStore.getIn([this.props.route, this.props.id]);

    let classes = classNames(
      'v-banner', 'v-banner--edit'
    );

    if (!component) {
      return <div>Oi</div>;
    }
    return (
      <div className={classes} onClick={this.onClickContainer}>
        <img src={component.getIn(['settings', 'url'])} width="100%"/>
      </div>
    );
  }
}

export default BannerEditMode;
