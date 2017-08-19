
/*global require, module, __dirname*/

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],

	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader!babel-loader'
		}]
	},

	resolve: {
		extensions: ['*', '.js', '.jsx']
	},

	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.template.ejs',
			inject: 'body',
		})
	],

	devServer: {
		contentBase: './dist',
		hot: true
	}
};
