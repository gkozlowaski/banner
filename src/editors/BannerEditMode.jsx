import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
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
    let classes = 'v-banner v-banner--edit';

    let content;
    if (component) {
      content = <img src={component.getIn(['settings', 'url'])} width="100%"/>;
    } else {
      content =
      <div className="v-banner-ed__current-banner">
      <span className="v-banner-ed__banner-placeholder-text">Nenhuma imagem configurada</span>
      </div>;
    }

    return (
      <div className={classes} data-no-config={!component} onClick={this.onClickContainer}>
        {content}
      </div>
    );
  }
}

export default BannerEditMode;
