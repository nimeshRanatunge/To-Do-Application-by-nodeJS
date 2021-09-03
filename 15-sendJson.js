var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res)=>{
    console.log('request is made : ' + req.url)
    var myobj = {
        name: 'ryu',
        job: 'ninja',
        age: 29
    }
    res.end(JSON.stringify(myobj))
})

server.listen(3000, ()=>{
    console.log('server is running')
})
