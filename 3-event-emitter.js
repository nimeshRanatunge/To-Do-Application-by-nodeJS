var events = require('events')

var myemitter = new events.EventEmitter()

myemitter.on('someevent', (mssg)=>{
    console.log(mssg)
})

myemitter.emit('someevent', 'the event was emitted')