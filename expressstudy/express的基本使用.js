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
// 中间件的注意事项，1.一定要在路由器注册中间件
// 2.可以连续调用多个中间件
// 3.next（）方法之后不要再写代码，同时不要忘记调用next
// 4.多个中间件之间共享req和res，所以在中间件的上游可以自定义属性传递给下游中间件使用
// 注意，错误级别的中间件，必须注册在所有的路由之后
const mv = function(req,res,next){
  console.log('定义了一个最简单的中间件');
  next()
}
app.use(mv)

const userRouter = require('./routermodule/router')
app.use(userRouter)

