const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socket = require("socket.io")

//Routes
const clients = require('./routes/api/clients');
const chats = require('./routes/api/chats');
//
const app = express();

//Body-Parser Middleware
app.use(bodyParser.json());

//DB Config
const DB = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(DB,{ useNewUrlParser: true })
    .then(()=>console.log('Mongo connected'))
    .catch(err=>console.log(err));

//Use Routes 
app.use('/api/clients',clients);
app.use('/api/chats',chats);


const PORT = 5000;

server = app.listen(PORT,()=>console.log(`Server started on ${PORT}`));
io = socket(server);
io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});