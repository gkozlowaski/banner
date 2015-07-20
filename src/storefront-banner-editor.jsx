import storefront from 'storefront';
import Banner from 'editos/BannerEditor';

storefront.export('BannerEditor', Banner);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}
