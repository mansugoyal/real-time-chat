let express = require('express');
let socket = require('socket.io');

let app = express();


let server = app.listen(4000, () => {
    console.log(`App is listening on port 4000`);
});

//static files
app.use(express.static('public'));


//socket setup
let io = socket(server);

io.on('connection',function(socket){
    console.log("made socket connection",socket.id);

    socket.on('chat-message',function(data){
        io.sockets.emit('chat-message',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    })

});