const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "../dist"),
        library: "dom"
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|png|gif|jpg|jpeg|obj)(\?.*)?$/,
                loader: 'file-loader'
            }
        ]
    },

    devServer: {
        proxy: {
            '/api': 'http://localhost:8081'
        },
        https: false
    },


    plugins: [new HtmlWebpackPlugin({
        template: "./frontend/index.html"
    })],
};