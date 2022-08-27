// 创建get请求
// 1. 导入express
const express = require('express')
// 2.创建路由对象
const router = express.Router()

//3.挂载get方法
router.get('/user/list',(req,res) => {
  res.send('Get user list')
})

// 挂载post方法

router.post('/user/add',m1,(req,res) => {
  res.send('Add new user')
})

function m1(req,res,next){
  console.log('我是post的中间件');
  next()
}

module.exports = router