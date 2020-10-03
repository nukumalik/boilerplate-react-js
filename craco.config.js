const path = require('path')

const pathResolve = path.resolve(__dirname)

module.exports = {
  webpack: {
    resolve: {
      alias: {
        components: path.resolve(pathResolve, 'src/components'),
        config: path.resolve(pathResolve, 'src/config'),
        layouts: path.resolve(pathResolve, 'src/layouts'),
        pages: path.resolve(pathResolve, 'src/pages'),
        static: path.resolve(pathResolve, 'src/static'),
        store: path.resolve(pathResolve, 'src/store'),
        themes: path.resolve(pathResolve, 'src/themes'),
        utils: path.resolve(pathResolve, 'src/utils'),
      },
    },
  },
}
