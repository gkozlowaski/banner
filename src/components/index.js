import { actions } from 'sdk';
import Banner from './Banner/Banner';

let components = [
  {
    name: 'Banner@vtex.storefront-banner',
    constructor: Banner,
  }
];

actions.ComponentActions.register(components);
