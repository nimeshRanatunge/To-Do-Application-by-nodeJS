var fs = require('fs')

fs.mkdir('stufff', ()=>{
    fs.readFile('readmew.txt', 'utf8', (err, data)=>{
        if(err){
            console.error(err)
        }else{
            fs.writeFile('./stufff/writeme.txt', data, (err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('ok')
                }
            })
        }
    })
})