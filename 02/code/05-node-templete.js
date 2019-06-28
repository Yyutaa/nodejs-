const template = require('art-template');
const fs = require('fs');

const http = require('http');

const server = http.createServer((req,res) => {

  fs.readFile('./tpl.html',(error,data) => {
    var ret = template.render(data.toString(), {
      name:'yuta',
      age:'23',
      province:'深圳市',
      hobbies:[
        '唱',
        '跳',
        'rap',
      
      ],
      title:'个人信息'
    })
    if(error) {
      return console.log('读取文件失败了')
    } else {
      res.end(ret)
    }
  })
})

server.listen(3000,'127.0.0.1',() => {
  console.log('running...')
})

