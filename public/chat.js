// Make connection
let socket = io.connect('http://127.0.0.1:4000');

//Query DOM
let message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');


//emit event
btn.addEventListener('click', function () {
      socket.emit('chat-message', {
            message: message.value,
            handle: handle.value
      });
});

message.addEventListener('keypress', function () {
      socket.emit('typing', handle.value)
});


//listen event
socket.on('chat-message', function (data) {
      feedback.innerHTML = "";
      output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
      feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
})