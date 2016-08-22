module.exports = {
    entry: ['babel-polyfill', './app.js'],
    output: {
        path: "dist",
        filename: 'out.js',
        publicPath: 'static/dist/'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style!css!"
            }, {
                test: /\.less$/,
                loader: "style!css!less"
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.(woff|woff2)$/,
                loader: "url?prefix=font/&limit=5000"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.gif/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            }, {
                test: /\.jpg/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            }, {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }

        ]
    }
    // {
    //    test: /\.less$/,
    //    loader: "!style!css!less"
    //  },
    // { test: /\.css$/, loader: "style!css!" }
    //      {
    //     test: /\.jsx?$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loaders: ['babel']
    // }

}