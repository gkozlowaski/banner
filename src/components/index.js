import { actions } from 'sdk';
import Banner from './Banner';

let components = [
  {
    name: 'Banner@kozlowaski.banner',
    constructor: Banner
  }
];

actions.ComponentActions.register(components);
