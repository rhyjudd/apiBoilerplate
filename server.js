//server.js

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

//how we imported our routes into our server
require('./app/routes')(app, {});

app.listen(port, ()=>{
    console.log(`We are live on ${port}`);
});



