const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const ClientSchema = new Schema({
    alias:{
        type:String,
        required:true
    }
});
module.exports = Client = mongoose.model('client',ClientSchema);