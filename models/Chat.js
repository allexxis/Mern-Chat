const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const ChatSchema = new Schema({
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        deafult:Date.now

    }
});

module.exports = Chat = mongoose.model('chat',ChatSchema);