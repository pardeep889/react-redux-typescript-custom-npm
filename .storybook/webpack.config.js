const path = require('path');
const lessPluginGlob = require('less-plugin-glob');

module.exports = ({ config }) => {
  // load custom variables for theme
  config.module.rules.push({
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'less-loader',
      options: {
        plugins: [lessPluginGlob],
        paths: [path.resolve(__dirname, "src"),path.resolve(__dirname, "node_modules")],
        javascriptEnabled: true,
      }
      },
    ],
  }, 
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  },
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias['@style'] = path.resolve(__dirname, '../src/assets/style/')
  config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components/')

  return config;
};