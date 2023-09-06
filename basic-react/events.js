var events = require('events')

var eventEmitter = new events.EventEmitter()

var ringBell = () => {
    console.log('Ring Ring Ring!!');
    eventEmitter.emit('bellRings', 'Welcome')
}

eventEmitter.on('doorOpen', ringBell)

eventEmitter.on('bellRings', (msg) => {
    console.log(msg);
})

eventEmitter.emit('doorOpen')