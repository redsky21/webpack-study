const path = require('path');
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
                        publicPath: './dist/',
                        name: '[name].[ext]?[hash]',
                        limit: 20000
                    },

                }
            ]
        }
    }