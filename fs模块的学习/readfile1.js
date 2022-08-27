const fs = require('fs')
// 使用readFile（）读取文件：要注意的是路径会以执行的时候路径进行拼接，总共三个参数，第一个是文件路径
// 第二个是编码方式，第三个是读取后的回调函数，在回调函数中第一个参数是读取失败的对象，第二个参数是读取成功后的内容
fs.readFile('./fs模块的学习/1.txt','utf8',(err,dataStr) => {
  console.log(err);
  console.log('~~~~~~');
  console.log(dataStr);
})
