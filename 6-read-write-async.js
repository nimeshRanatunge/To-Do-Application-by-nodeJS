var fs = require('fs')

fs.writeFile('relatedTo6.txt', 'heyy brothers', (err)=>{
    if(err){
        console.error(err)
    }else{
        console.log('\'success\'')
    }
})