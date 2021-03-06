const path = require('path');
const lessPluginGlob = require('less-plugin-glob');

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js(x?)$/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.ts(x?)$/,
				use: {
					loader: 'ts-loader',
				}
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							plugins: [lessPluginGlob],
							paths: [path.resolve(__dirname, "src"),path.resolve(__dirname, "node_modules")],
							javascriptEnabled: true,
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.json', '.png', '.gif', '.jpg', '.svg'],
		alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@style': path.resolve(__dirname, 'src/assets/style/'),
      '@icon': path.resolve(__dirname, 'src/assets/icon/'),
    }
	},
};
