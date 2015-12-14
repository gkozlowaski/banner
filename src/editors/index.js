import { actions, redux } from 'sdk';
import BannerEditor from './BannerEditor/BannerEditor';

let components = [
  {
    name: 'BannerEditor@vtex.banner',
    constructor: BannerEditor
  }
];

redux.store.dispatch(redux.actionCreators.component.register(components));
actions.ComponentActions.register(components);
