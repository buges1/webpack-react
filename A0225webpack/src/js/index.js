/*
*注意：该文件不同于学习模块化的那个汇总js的文件
*该文件为webpack的入口文件
* 可以用于汇总所有的文件js,css,img,video,mp3/mp4
*/
import '@babel/polyfill' //es6高级语法转换,有缺点，不管用了多少新的语法，他都会全部进行转换
import {sum} from "./module1";
import {sub} from "./module2";
import module3 from "./module3";
//引入json文件
import a from '../json/test.json';
//引入css文件
import '../css/index.less'

console.log(sum(1,2));
console.log(sub(5,9));
console.log(module3.mul(5,5));
console.log(module3.div(10,2));
console.log(a,typeof a);

setTimeout(()=>{
    console.log("到点了");
},1000)
let x=2;
console.log(x);

let myPromise = new Promise((resolve)=>{
    resolve('哈哈')
})
myPromise.then((data)=>{
    console.log(data)
})
// 入口 webpack的入口文件
// 打包 webpack ./src/js/index.js -o ./dist/js/index.js --mode development
// √ 打包 webpack ./src/js/index.js -o ./dist/js --mode development
// √ 打包 webpack ./src/js/index.js -o ./dist/js --mode production
// 代码走查工具--公司/项目经理
//npm install eslint-loader eslint --save-dev  代码检查
/*
* npm install -D babel-loader @babel/core @babel/preset-env webpack
* vue用的代码走查事ESLint配置简单
* react用的是JSLint但是配置麻烦
*/
