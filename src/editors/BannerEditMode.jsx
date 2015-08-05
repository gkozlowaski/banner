import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import style from 'styles/BannerEditMode.less'; // eslint-disable-line
import BannerImage from 'components/BannerImage';
import BannerPlaceholder from 'editors/BannerPlaceholder';

@connectToStores([
  dispatcher.stores.SettingsStore
])
class BannerEditMode extends React.Component {
  handleOpenEditor = () => {
    dispatcher.actions.EditorActions.openEditor({
      component: 'BannerEditor',
      route: this.props.route,
      id: this.props.id
    });
  }

  onTouchBannerLink = (e) => {
    e.preventDefault();
  }

  render() {
    const component = this.props.SettingsStore.getIn([this.props.route, this.props.id]);

    let content;
    if (component) {
      let imageUrl = component.getIn(['settings', 'url']);
      let link = component.getIn(['settings', 'link']);
      let altText = component.getIn(['settings', 'altText']);

      content = <BannerImage imageUrl={imageUrl} link={link} altText={altText} onTouchBannerLink={this.onTouchBannerLink}/>;
    } else {
      content = <BannerPlaceholder/>;
    }

    return (
      <div>
        <span className="v-banner-ed__component-title">Banner</span>
        <div className="v-banner" data-no-config={!component} onTouchTap={this.handleOpenEditor}>
          {content}
        </div>
      </div>
    );
  }
}

export default BannerEditMode;
