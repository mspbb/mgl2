const path = require('path')
const HTMLplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: './src/js/script.js',
	/* entry: {
		app: './src/js/script.js',
		vendor : './src/js/modal.js',
	}, */
	output: {
		filename: 'bundle.[chunkhash].js',
		path: path.resolve(__dirname, 'public'),
},
	devServer: {
		port: 5001
	},
	plugins: [
		new HTMLplugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin()
		],
		module: {
			rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			],
		},
}