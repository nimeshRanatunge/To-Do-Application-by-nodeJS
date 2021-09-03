const fs = require('fs')
var http = require('http')

var server = http.createServer((req, res)=>{
    console.log('request is made : ' + req.url)
    if(req.url ==='/home' || req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    }else if(req.url === '/contact'){
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'yoshu', age: 23}, {name: 'yue', age: 25}]
        res.end(JSON.stringify(ninjas))
    }else{
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
})

server.listen(3000, ()=>{
    console.log('server is running')
})