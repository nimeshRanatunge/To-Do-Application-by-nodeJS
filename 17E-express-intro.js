const express = require('express') //function

var app = express()

app.get('/', (req, res)=>{
    res.send('This is the home page')
})
app.get('/contact', (req, res)=>{
    res.send('This is the contact page')
})

app.listen(3000)