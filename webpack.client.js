const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

	// Tell  webpack the root file of our server application
	entry: './src/client/client.js',

	// Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},

	plugins: process.env.NODE_ENV === 'production' ? [
    	new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin()
  	] : [],
};

module.exports = merge(baseConfig, config); 