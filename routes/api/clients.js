const express = require('express');
const router = express.Router();

//Chat model
const Client = require('../../models/Client');

// @route GET api/clients
// @desc  GET ALL clients
// @acces  Public 

router.get('/',(req,res)=>{
    Client
        .find()
        .sort({date:-1})
        .then(clients=>res.json(clients))
})

module.exports = router; 