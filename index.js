let express = require('express');
let socket = require('socket.io');

let app = express();
let port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
