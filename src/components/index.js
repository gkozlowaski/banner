import { actions, redux } from 'sdk';
import Banner from './Banner/Banner';

let components = [
  {
    name: 'Banner@vtex.banner',
    constructor: Banner
  }
];

redux.store.dispatch(redux.actionCreators.component.register(components));
actions.ComponentActions.register(components);
