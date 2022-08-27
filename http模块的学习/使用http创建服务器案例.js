// 导入http模块
const http = require('http')

// 2.创建http实例
const httpObj = http.createServer();

// 3.为服务器实例绑定request事件，监听客户端的请求
httpObj.on('request',(req,res) => {
  const str = `您请求的url地址是${req.url}，请求的方式是${req.method}`
  res.setHeader('Content-Type','text/html;charset=utf-8')
  res.end(str)
})

// 4.启动服务器
httpObj.listen(8088,() => {
  console.log('http server running at http://127.0.1');
})