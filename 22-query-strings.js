const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use('/assets', express.static('stuff')) /* Now any request that is made to /assets will be map to stuff folder
/assets - route stuff-linking up the directory
*/

app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/contact', (req, res)=>{
    res.render('contact', {qs: req.query})
})
app.get('/profile/:name', (req, res)=>{
    var data = {age: 30, job: 'netNinja Inc.', hobbies : ['eating', 'fighting', 'fishing', 'dancing', 'collecting stamps']}
    res.render('profile', {person: req.params.name, data: data}) //by rendering, it gets data directly form views folder
})

app.listen(3000)

//inject data use <%= %>
//output js only <% %>

//browser url : cntact?dept=marketing&person=joe