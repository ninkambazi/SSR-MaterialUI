module.exports = {

	resolve: {
	    extensions: ['.js', '.css']
	},

	// Tell webpack to run Babel on every file it runs through
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}]
					]
				}
			},		
     	]
	}
};