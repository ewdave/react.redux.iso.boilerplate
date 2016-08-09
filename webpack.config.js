var path = require('path');
var webpack = require('webpack');

var loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react', 'stage-0']
    }
  },
  ,
  {
    test: /\.scss$/,
    loaders: [
      "style", "css", "sass"
    ]
  },
  {
    test: /\.css$/,
    loaders: [
      "style", "css", "sass"
    ]
  },
  {
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      'file?name=[sha512:hash:base64:7].[ext]'
    ]
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=10000&minetype=application/font-woff"
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  },
  {
    test: /\.json$/,
    loader: 'json'
  }
]

module.exports = [
  {
    name: "Client Side",
    devtool: 'eval',
    entry: [
      './src/index'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      loaders: loaders
    }
  },
  {
    name: "Server Side",
    entry: "./render.js",
		target: "node",
    devtool: 'eval',
		output: {
      path: path.join(__dirname, 'dist'),
			filename: "render.js",
			publicPath: '/',
      libraryTarget: 'commonjs2'
		},
    module: {
      loaders: loaders
    }
  }
]
