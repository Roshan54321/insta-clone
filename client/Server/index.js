const express = require('express');
const app = express();
const http = require('http').createServer(app);

port = process.env.port || 8080;
const io = require('socket.io')(http) 
http.listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
})

const users  = {} 

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New user", name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    })

    socket.on('send', message => {
        socket.broadcast.emit('receive', {message: message,  name: users[socket.id]})
    })

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id])
    })
})