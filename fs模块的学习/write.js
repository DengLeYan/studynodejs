// 向1.txt文件中写入内容
const fs = require('fs')
const str = '向1.txt写入的内容'

fs.writeFile('./fs模块的学习/1.txt',str,(err) => {
  if(err){
    console.log('写入失败');
  }
  console.log('写入成功');
})