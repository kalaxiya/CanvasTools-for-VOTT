const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/canvastools/ts/CanvasTools.ts',
    output: {
        filename: 'ct.dev.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        library: '',
    },
    mode: "development",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: require.resolve('snapsvg'),
                loader: 'imports-loader?this=>window,fix=>module.exports=0'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
          ]
      },
      resolve: {
         extensions: ['.ts', '.js'],  
         plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
      }
};