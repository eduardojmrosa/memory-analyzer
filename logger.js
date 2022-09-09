const EventEmitter = require ('events')
const fs= require('fs')
const path = require('path')

const emmiter = new EventEmitter()

emmiter.on('log', (message)=>{
    fs.appendFile(path.join(__dirname,"log.txt"), message, err =>{
        if (err) throw err
    } )
})

function log(message){
    emmiter.emit('log', message)
}

module.exports = log