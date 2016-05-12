import { actions } from 'sdk';
import BannerEditor from './BannerEditor';

let components = [
  {
    name: 'BannerEditor@kozlowaski.banner',
    constructor: BannerEditor
  }
];

actions.ComponentActions.register(components);
