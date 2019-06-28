const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
  
  const url = req.url;
  if ( url === '/html') {
    fs.readFile('./resource/index.html',(error,data) => {
      if (error) {
        res.setHeader('Content-type','text/plain;charset=utf-8')
        res.end('文件读取失败')
      } else {
        res.end(data)//res.end() 可以转换字符串和二进制类型数据和文件
      }
    })
  } else if ( url === '/banner') {
    fs.readFile('./resource/banner.png',(error,data) => {
      if (error) {
        res.setHeader('Content-type','text/plain;charset=utf-8')
        res.end('文件读取失败')
      } else {
        res.setHeader('Content-type','image/png');
        res.end(data);//res.end() 可以转换字符串和二进制类型数据和文件
      }
    })
  }

  
})

server.listen(3000,'127.0.0.1',() => {
  console.log('服务器启动')
});