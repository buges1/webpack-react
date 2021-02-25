/*
 * webpack的配置文件，用于指定webpack要执行的文件
 * cjs的暴露
 * 要注意路径问题
 */
const {resolve} = require('path')
//loader不用引入，自动会匹配，但是需要声明一些噢
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: resolve(__dirname, 'dist/js'),
        filename: 'main.js',
    },
    //配置工作模式
    // mode: 'production', //生产模式
    mode: "development", //开发模式
    // 所有的loader都要在module的rules属性中，rules是一个数组
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader',  //顺序不能变,在HTML中生成一个style标签并且将css存入进去
                    'css-loader',  //顺序不能变，将less编译后的css转换成commonJS的模块
                    'less-loader'  //将less编译为css，但是不生成单独的css文件，在内存中
                ]
            },
            //js语法检查
            {
                test: /\.js$/,//正则配对所有js文件
                exclude: /node_modules/,//必须排除node_modules中的js文件
                enforce: "pre",//提前加载使用
                use: {
                    loader: "eslint-loader"
                }
            },
            //js兼容性处理/语法转换 es6->es5
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
