var fs = require('fs')

// fs.unlink('text.txt', (err)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log('file deleted')
//     }
// })

/* ** Node come up with: 'DeprecationWarning: Calling an asynchronous function without callback is deprecated.'

The reason being that whilst the fs.readfile has a callback function, the fs.writefile does not. 
So if you run fs.writefileSync this still works perfectly. **
 */

//fs.mkdirSync('stuff')
//fs.rmdirSync('stuff')