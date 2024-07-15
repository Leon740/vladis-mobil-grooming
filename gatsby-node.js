const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'src/assets'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        pages: path.resolve(__dirname, 'src/pages')
      }
    }
  });
};
