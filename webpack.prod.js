const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
        },
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ],
    },
    plugins: [
        new Dotenv({
            safe: true,
            systemvars: true
        })
    ]
});
