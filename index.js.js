require('dotenv').config();

let express = require('express');
let socket = require('socket.io');

let app = express();
let host = process.env.HOST;
let port = process.env.PORT || 5000;


let server = app.listen(port, () => {
    console.log(`App is listening on port ${host}:${port}`);
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
});