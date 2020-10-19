var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/FaqComponent.jsx",
    output: {
        path: path.resolve("lib"),
        filename: "FaqComponent.js",
        libraryTarget: "commonjs2",
    },
    externals: {
        react: "commonjs react",
        "react-dom": "commonjs react-dom",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
