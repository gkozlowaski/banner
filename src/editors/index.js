import { actions } from 'sdk';
import BannerEditor from './BannerEditor/BannerEditor';

let components = [
  {
    name: 'BannerEditor@vtex.storefront-banner',
    constructor: BannerEditor
  }
];

actions.ComponentActions.register(components);