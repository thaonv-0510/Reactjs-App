const PnpWebpackPlugin = require('pnp-webpack-plugin')

module.exports = {
  test: /\.tsx?$/,
  use: [
    {
      loader: "ts-loader",
      options: PnpWebpackPlugin.tsLoaderOptions().merge(
        {
          getCustomTransformers() {
            return {
              before: [
                transform({
                  overrideIdFn: '[sha512:contenthash:base64:6]',
                }),
              ],
            }
          },
          // transpileOnly removes typechecking but we are using fork-ts-checker-webpack-plugin
          // https://github.com/TypeStrong/ts-loader#transpileonly
          transpileOnly: true,
        }
      )
    }
  ]
}
