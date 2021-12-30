/** 配置说明:
 * webpack 是javascript静态模块打包工具。webpack在处理应用时，它会在内部构建一个依赖图，此图对应映射到项目所需要的每个模块，并生成一个或多个bundle。
 * loader用于转换某些类型的模块，而插件可以用于执行范围更广的任务。包括：打包优化、资源管理、注入环境变量等。
 * 想要使用一个插件，只需要require加载它，并添加到到plugins数组中。多数插件可以通过选项(option)自定义。也可以在一个配置文件中因不同目的而多次使用一个插件，这时需要通过使用new 操作符来创建一个插件实例。
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
    // 入口文件 入口起点指示webpack应该作用哪个模块来作为构建其内部依赖图的开始。
    // 进入入口起点后，webpack会找出哪些模块和库是入口起点（直接和间接）依赖。
    entry: path.join(__dirname, 'src/main.js'),
    // 输入文件属性告诉Webpack在哪里输入它所创建的bundle文件，以及如何全名这些文件。
    output: {
        filename: 'bundle.js',             //配置输入文件名，可添加路径配置(例如 js/)。
        path: path.join(__dirname, 'dist') //文件的输入路径，必须为绝对地址。
    },
    // 通过选择development（开发模式）和production（生产模式）或者none，来设置模式参数，可以启用Webpack内置相应环境的优化。
    // 其默认值为production。
    mode: 'development', //配置模块
    // test识别出哪些文件会被转换
    // use定义出在进行转换时，应该使用哪个loader
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'scss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // 生成html页面并导入bundle.js，如果配置了filename，则以项目中Filename指定的html为模板
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}

module.exports = config;