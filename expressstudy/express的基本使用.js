// 导入express模块
const express = require('express')
//2.创建服务器实例
const app = express()
// 3. 启动服务器
app.listen(8888,() => {
  console.log('express server running at http://127.0.0.1');
})

// 监听get请求
// app.get('/index/:ids/:name',(req,res) => {
//   console.log(req.params.name);
//   console.log('获得的浏览器参数是'+req.query.name);
//   res.send('请求地址是'+decodeURI(req.url)+'动态参数为'+req.params.ids)
// })
// app.use('/public',express.static('public'))
// 注意中间件是有顺序的
const mv = function(req,res,next){
  console.log('定义了一个最简单的中间件');
  next()
}
app.use(mv)

const userRouter = require('./routermodule/router')
app.use(userRouter)

