module.exports = {
    entry: "./js/sampleapp.js",
    output: {
        filename: "bundle.js"
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
    },
    mode: "development"
};