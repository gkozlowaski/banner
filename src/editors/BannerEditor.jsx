import React from 'react';
import { dispatcher, connectToStores } from 'sdk';

@connectToStores([
  dispatcher.stores.ShopStore,
  dispatcher.stores.SettingsStore
])
class BannerEditor extends React.Component {
  constructor(props) {
    super(props);
    let config = props.SettingsStore.getIn([this.props.route, this.props.id, 'settings']);

    this.state = {
      url: config ? config.get('url') : null
    };
  }

  changeUrl = (e) => {
    this.setState({ url: e.target.value });
  }

  onClickSave = () => {
    dispatcher.actions.SettingsActions.saveComponent({
      accountName: this.props.ShopStore.get('accountName'),
      route: this.props.route,
      component: 'Banner@vtex.storefront-banner',
      id: this.props.id,
      settings: this.state
    });
    dispatcher.actions.EditorActions.closeEditor();
  }

  render() {
    let ActionBar = this.props.actionBar;

    return (
      <div className="storefront-banner-admin">
        <input type="text" value={this.state.url} onChange={this.changeUrl}/>

        <ActionBar onSave={this.onClickSave}/>
      </div>
    );
  }
}

export default BannerEditor;
