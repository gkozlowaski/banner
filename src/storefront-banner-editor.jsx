import { dispatcher } from 'sdk';
import BannerEditor from 'editors/BannerEditor';
import BannerEditMode from 'editors/BannerEditMode';

let components = [
  {
    name: 'BannerEditor',
    constructor: BannerEditor
  },
  {
    name: 'BannerEditMode',
    constructor: BannerEditMode
  }
];

dispatcher.actions.ComponentActions.register(components);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}
