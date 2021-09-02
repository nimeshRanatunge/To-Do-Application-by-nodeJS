var fs = require('fs')

// fs.mkdir('stufff', ()=>{
//     fs.readFile('readmew.txt', 'utf8', (err, data)=>{
//         if(err){
//             console.error(err)
//         }else{
//             fs.writeFile('./stufff/writeme.txt', data, (err)=>{
//                 if(err){
//                     console.log(err)
//                 }else{
//                     console.log('ok')
//                 }
//             })
//         }
//     })
// })

fs.unlink('./stufff/writeme.txt', (err)=>{
   if(err){
       console.error(err)
   }else{
    fs.rmdir('stufff', (err)=>{
        if(err){
            console.error(err)
        }else{
            console.log('objective is completed')
        }
    })
   }
})