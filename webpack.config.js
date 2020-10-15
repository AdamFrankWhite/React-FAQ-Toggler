var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/FaqComponent.jsx",
    output: {
        path: path.resolve("lib"),
        filename: "FaqComponent.js",
        libraryTarget: "commonjs2",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            },
        ],
    },
};
