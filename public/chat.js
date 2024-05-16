// Make connection
let socket = io.connect('http://127.0.0.1:9000');

//Query DOM
let message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');


//emit event
btn.addEventListener('click',function(){
      socket.emit('chat-message', {
            message: message.value,
            handle: handle.value
      });
});


//listen event
socket.on('chat-message',function(data){
      output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message+ '</p>';
});