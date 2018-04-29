module.exports = {
    mode: "development",
    entry: ["./webpackentry.js"],
    output: {
        path: __dirname + "/public/js/",
        filename: "output.js"
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};