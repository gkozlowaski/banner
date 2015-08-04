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
