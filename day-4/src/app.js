/*
    to create server
    to configure server
*/


const express = require('express');
const app = express(); //server created
app.use(express.json());


module.exports = app;
