const express = require('express');
const router = express.Router();

//Chat model
const Client = require('../../models/Client');

// @route GET api/clients
// @desc  Get all Clients
// @acces  Public 

router.get('/',(req,res)=>{
    Client
    .find()
    .sort({date:-1})
    .then(clients=>res.json(clients))
})

// @route POST api/clients
// @desc  Create a Client
// @acces  Public 

router.post('/',(req,res)=>{
    const newClient = new Client({
        alias: req.body.alias
    });
    newClient.save().then(client=>res.json(client))
})

// @route DELTE api/clients/:id
// @desc  Delete a Client
// @acces  Public 

router.delete('/:id',(req,res)=>{
    Client
    .findById(req.params.id)
    .then(client=>client
        .remove()
        .then(()=>res.json({succes:true})))
    .catch(err=>res.status(404).json({succes:false}));
});

module.exports = router; 