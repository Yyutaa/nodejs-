const http = require('http');

const server = http.createServer((req,res) => {

  //text/plain是普通文本类型的意思
  res.setHeader('Content-type','text/plain;charset=utf-8')
  var url = req.url
  //根据请求不同的url来显示对应的数据
  if( url === '/') {
    res.end('首页')
  } else if (url === '/login') {
    res.end('login page')
  } else if ( url === '/plain') {
    res.end('hello world 你好！')
  } else if ( url === '/html') {
    res.setHeader('Content-type','text/html;charset=utf-8')
    res.end('<p>这是测试</p><a href="">点我</a>')
  } else {
    res.end('404 not found')
  }
})

server.listen(3000,'127.0.0.1',() => {
  console.log('服务器启动了')
});