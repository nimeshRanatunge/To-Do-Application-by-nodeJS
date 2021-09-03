const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('this is the home page')
})
app.get('/contact', (req, res)=>{
    res.send('this is the contact page')
})
app.get('/profile/:id', (req, res)=>{
    res.send(`You requested profile with id of ${req.params.id}`) //dynamic string with variable
})

app.listen(3000)