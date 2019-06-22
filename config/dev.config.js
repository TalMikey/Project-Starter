export const developmentConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        inline: true,
        port: 8080,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8000'
            }
        }
    }
};