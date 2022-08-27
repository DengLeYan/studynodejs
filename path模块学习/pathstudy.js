// 导入path模块
const ph = require('path')
// 定义路径
const pathStr = 'a/b/c/d.txt'
// 使用join方法将多个路径拼接
const joinStr = ph.join('q','w','e','r.txt')
console.log(joinStr);

// 使用basename（）方法将路径的文件名解析出来
const baseStr = ph.basename(pathStr)
console.log(baseStr);

// 使用extname（）获得路径文件的拓展名
const extStr = ph.extname(pathStr)
console.log(extStr);