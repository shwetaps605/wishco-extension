const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] },
              },
              {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
              },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "../manifest.json" },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Application name",
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: [".jsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
    },
}

// function getHtmlPlugins(chunks) {
//     return chunks.map(
//         (chunk) =>
//             new HTMLPlugin({
//                 title: "wishco extension",
//                 filename: `${chunk}.html`,
//                 chunks: [chunk],
//             })
//     );
// }