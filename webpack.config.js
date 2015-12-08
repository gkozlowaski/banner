var webpack = require('webpack');
var path = require('path');
var meta = require('./meta.json');
var publicPath = '/assets/@' + meta.vendor + '.' + meta.name + '/';
var production = process.env.NODE_ENV === 'production';

var config = {
  entry: {
    'Banner': ['./src/components/index.js'],
    'editors/index': ['./src/editors/index.js']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          stage: 0,
          plugins: []
        }
      }, {
        test: /\.scss$/,
        loaders: production ?
          ['style', 'css', 'autoprefixer?browsers=last 2 version', 'sass'] :
          ['style', 'css?sourceMap', 'autoprefixer?browsers=last 2 version', 'sass?sourceMap']
      }, {
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
        test: /\.svg$/,
        loaders: ['raw-loader', 'svgo-loader?' + JSON.stringify({
          plugins: [
            {removeTitle: true},
            {convertColors: {shorthex: false}},
            {convertPathData: false}
          ]
        })]
      }, {
        test: /\.(png|jpg|woff|ttf|eot|woff2)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: production ? [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new webpack.optimize.AggressiveMergingPlugin()
  ] : [
    new webpack.optimize.OccurenceOrderPlugin()
  ],

  externals: {
    'alt': 'alt',
    'axios': 'axios',
    'immutable': 'Immutable',
    'intl': 'Intl',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-intl': 'ReactIntl',
    'react-router': 'ReactRouter',
    'sdk': 'storefront.sdk',
    'vtex-editor': 'vtex.editor'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'assets': path.join(__dirname, '/src/assets'),
      'components': path.join(__dirname, '/src/components'),
      'editors': path.join(__dirname, '/src/editors'),
      'pages': path.join(__dirname, '/src/pages'),
      'utils': path.join(__dirname, '/src/utils')
    }
  },

  output: {
    path: path.resolve(__dirname, './storefront/assets/'),
    publicPath: publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    jsonpFunction: 'webpackJsonp_' + meta.vendor.replace(/\-/g, '') + '_' + meta.name.replace(/\-/g, ''),
    devtoolModuleFilenameTemplate: 'webpack:///' + meta.name + '/[resource]'
  },

  eslint: {
    configFile: '.eslintrc'
  },

  devtool: production ? null : 'source-map',

  watch: production ? false : true,

  quiet: true,

  noInfo: true,

  proxy: {
    '*': 'http://janus-edge.vtex.com.br/'
  }
};

if (process.env.HOT) {
  for (entryName in config.entry) {
    config.entry[entryName].unshift('webpack-hot-middleware/client');
  }
  config.plugins.unshift(new webpack.NoErrorsPlugin());
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

  config.module.loaders[0].query.plugins.push('react-transform');
  config.module.loaders[0].query.extra = {
    'react-transform': {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module']
      }, {
        transform: 'react-transform-catch-errors',
        imports: ['react', 'redbox-react']
      }]
    }
  };
}

module.exports = config;
