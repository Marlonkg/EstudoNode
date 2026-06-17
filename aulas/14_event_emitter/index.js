//basicamente só mais um metodo de fazer functions...
const EventEmitter = require('events')
const eventEmitter = new eventEmitter()

eventEmitter.on('start', () =>{
    console.log('Durante')
})


//primeiro
console,log("Antes")

//segundo 
eventEmitter.emit("start")

//terceiro
console.log("Depois")