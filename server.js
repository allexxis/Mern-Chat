const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Body-Parser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db,{ useNewUrlParser: true })
    .then(()=>console.log('Mongo connected'))
    .catch(err=>console.log(err));

const port = 5000;

app.listen(port,()=>console.log(`Server started on ${port}`));