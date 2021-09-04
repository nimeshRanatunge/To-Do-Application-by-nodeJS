const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/contact', (req, res)=>{
    res.sendFile(__dirname + '/contact.html')
})
app.get('/profile/:name', (req, res)=>{
    var data = {age: 30, job: 'netNinja Inc.', hobbies : ['eating', 'fighting', 'fishing', 'dancing', 'collecting stamps']}
    res.render('profile', {person: req.params.name, data: data}) //by rendering, it gets data directly form views folder
})

app.listen(3000)

//inject data use <%= %>
//output js only <% %>