var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res)=>{
    console.log('request is made : ' + req.url)
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    myReadStream.pipe(res)
})

server.listen(3000, ()=>{
    console.log('server is running')
})

/* send data in a stream, which is much better for performance than reading the whole file as a whole and then sending it on */