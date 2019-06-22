import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import _ from 'lodash';

import { developmentConfig } from './config/dev.config';
import { productionConfig } from './config/prod.config';

const baseConfig = {
    entry: path.join(__dirname, './client/index.js'),
    output: {
        path: path.join(__dirname, './dist/server/client'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 10000 }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|ico|png)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './client/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
    ],
    resolve: {
        extensions: ['.js', '.less', '.css', '.html']
    },
    node: {
        fs: 'empty'
    }
};

const mergeOptions = (objValue, srcValue) => {
    if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}

export default env => {
    const envConfig = (!env || !env.production) ? developmentConfig : productionConfig;

    return _.mergeWith(baseConfig, envConfig, mergeOptions);
};