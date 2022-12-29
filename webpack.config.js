const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtreactPlugin = require('mini-css-extract-plugin');
module.exports =
    {
        mode: "development",
        entry: {
            main: "./src/app.js"
        },
        output: {
            path: path.resolve('./dist'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/, //로더가 처리해야할 패턴 정규표현식
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    // test: /\.(jpg|png)$/,
                    test: /\.(jpg|png)$/, //로더가 처리해야할 패턴 정규표현식
                    loader:'url-loader',
                    options: {
                        // publicPath: './dist/',
                        name: '[name].[ext]?[hash]',
                        limit: 20000
                    },

                }
            ]
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: `Build Date: ${new Date().toLocaleDateString()}
                Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
                Commit Version: ${childProcess.execSync('git config user.name')}
                `
            }),
            new webpack.DefinePlugin({
                TWO  : 1+1,
                'api.domain': JSON.stringify("http://naver.com")
            }),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                templateParameters: {
                    env: process.env.NODE_ENV === 'development' ? '(개발용)': ''
}
            }),
            process.env.NODE_ENV === 'production'?
            new MinCssExtreactPlugin({filename: '[name].css'}):false
        ]
    }