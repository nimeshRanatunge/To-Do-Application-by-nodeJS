var events = require('events')
//var util = require('util')

class person extends events.EventEmitter{
    constructor(name){
        super()
        this.name = name
    }
} // inherit event emitter on person constructor


var james = new person('james')
var larry = new person('larry')
var ryu = new person('ryu')

var people = [james, larry, ryu]

people.forEach((personn)=>{
    personn.on('speak', (msg)=>{
        console.log(`${personn.name} said: ${msg}`)
    })
})

james.emit('speak', 'hey dudes')

//attach events to objects custom events