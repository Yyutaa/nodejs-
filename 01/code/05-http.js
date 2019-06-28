const http = require('http')

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  // res.write('hello')
  // res.setHeader('conten-type','text/html');
  res.end('ddsdas')
})

// server.on('request',() => {
//   console.log('服务器收到请求了')
// })

server.listen(3000,'127.0.0.1',() => {
  console.log('服务器启动成功，请在浏览器上输入127.0.0.1:3000进行访问')
})