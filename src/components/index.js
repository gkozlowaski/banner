import { actions } from 'sdk';
import Banner from './Banner';

let components = [
  {
    name: 'Banner@vtex.banner',
    constructor: Banner
  }
];

actions.ComponentActions.register(components);
