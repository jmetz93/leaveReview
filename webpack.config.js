const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const ExtractText = require('extract-text-webpack-plugin');
const HtmlWebpackPlug = require('html-webpack-plugin');

const common_server = {
    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          loader: "babel-loader",
          options: {
              presets: ['es2015', 'react', 'env']
          }
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
                loader: 'image-webpack-loader',
                query: {
                    gifsicle: {
                        interlaced: false,
                    },
                    optipng: {
                        optimizationLevel: 7,
                    },
                }
            }]
        },
        {
            test: /\.css$/,
            use: ExtractText.extract({ fallback: 'style-loader', use: ['css-loader'] }) 
        },
      ],
    },
    plugins: [
        new ExtractText('[name].css')
    ]
  };

  const common_client = {
    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          loader: "babel-loader",
          options: {
              presets: ['es2015', 'react', 'stage-0']
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
            loader: 'image-webpack-loader',
            query: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
            }
          }]
        },
      ],
    },
  }
  
  
  const client = {
    entry: `${SRC_DIR}/client.js`,
    output: {
      path: DIST_DIR,
      filename: 'app.js'
    },
    devtool: 'eval-source-map',
  };
  
  const server = {
    entry: `${SRC_DIR}/server.js`,
    target: 'node',
    output: {
      path: DIST_DIR,
      filename: 'app-server.js',
      libraryTarget: 'commonjs-module'
    }
  };
  
  module.exports = [
    Object.assign({}, common_client, client),
    Object.assign({}, common_server, server)
  ];
// module.exports = {
//     mode: 'development',
//     entry: `${SRC_DIR}/index.jsx`,
//     output: {
//     filename: 'bundle.js',
//     path: DIST_DIR,
//     },
//     module: {
//     rules: [
//         {
//             test: /\.jsx?/,
//             include: SRC_DIR,
//             loader: 'babel-loader',
//             query: {
//                 presets: ['react', 'es2015'],
//             },
//         },
        // {
        //     test: /\.css$/,
        //     loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
        // },
        // {
        //     test: /\.(jpe?g|png|gif|svg)$/i,
        //     loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
        //         loader: 'image-webpack-loader',
        //         query: {
        //             gifsicle: {
        //                 interlaced: false,
        //             },
        //             optipng: {
        //                 optimizationLevel: 7,
        //             },
        //         }
        //     }]
        // } 
//     ],
//     },
// };
