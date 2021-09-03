var http = require('http')

var server = http.createServer((req, res)=>{
    console.log('request is made : ' + req.url)
    res.end('Hey ninjas')
})

server.listen(3000, ()=>{
    console.log('server is running')
})