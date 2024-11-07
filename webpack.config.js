const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin')
const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.[contenthash:8].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.pug$/,
				loader: "pug-loader"
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'template.pug'),
			filename: 'index.html',
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ['dist']
				}
			}
		})
	],
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 9000,
	},
}
