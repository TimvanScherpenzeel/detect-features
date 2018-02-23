// Vendor
const path = require('path');

// Paths
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

// Environment
const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
	context: srcPath,
	devtool: isDevelopment ? 'eval-cheap-module-source-map' : '',
	entry: './index.js',
	output: {
		path: distPath,
		filename: !isDevelopment ? 'feature-detector.min.js' : 'feature-detector.js',
		library: 'FeatureDetector',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader?cacheDirectory=true',
				options: {
					plugins: [
						'transform-object-rest-spread',
						'transform-object-assign',
					],
					presets: [
						['es2015', { modules: false }],
					],
				},
			},
		],
	},

	resolve: {
		modules: [
			path.resolve(__dirname, './node_modules'),
		],
	},

	stats: {
		colors: true,
		children: false,
	},
};

module.exports = config;
