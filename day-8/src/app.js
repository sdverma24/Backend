// to create server 
const express = require('express');
const nodeModel = require('./models/notes.model')
const app = express();


app.use(express.json());



app.post("/notes",async (req,res) => {
    const {name,course} = req.body; 

    const info = await nodeModel.create({ name,course });

    res.status(201).json({
        message:"Note created successfully",
        info
    })
})

app.get("/notes",async (req,res) => {
    const notes = await nodeModel.find();

    res.status(200).json({
        message:"Notes retrieved successfully",
        notes   
    })
})

module.exports = app;