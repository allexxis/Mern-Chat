const express = require('express');
const router = express.Router();

//Chat model
const Chat = require('../../models/Chat');

// @route GET api/chats
// @desc  GET ALL chats
// @acces  Public 

router.get('/',(req,res)=>{
    Chat
        .find()
        .sort({date:-1})
        .then(chats=>res.json(chats))
})

module.exports = router; 