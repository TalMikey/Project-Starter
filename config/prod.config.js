import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export const productionConfig = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};