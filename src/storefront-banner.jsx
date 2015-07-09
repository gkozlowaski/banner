import storefront from 'storefront';
import Banner from 'components/Banner';

storefront.export('Banner', Banner);

if (document.cookie.indexOf('VtexIdclientAutCookie') !== -1) {
  require('bundle!./components/BannerAdmin')((component) =>
    storefront.export('BannerAdmin', component)
  );
}

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}
