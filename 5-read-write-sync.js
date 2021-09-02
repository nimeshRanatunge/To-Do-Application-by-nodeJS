var fs = require('fs')

var myfileContent = fs.readFileSync('readmew.txt', 'utf8')
fs.writeFileSync('writemew.txt', myfileContent)