const express = require('express')
const noteModel = require('./models/note.model')

const app = express()


app.use(express.json());

app.post("/api/notes",async(req,res)=>{
    const {name,course} = req.body

    const note = await noteModel.create({
        name,course
    })
    res.status(201).json({
        message:"Note Created Successfully",
        note,
    })
})


app.get("/api/notes",async(req,res)=>{
    const notes = await noteModel.find()
    // find always returns in array data type
    res.status(200).json({
        message:"Fetched Successfully",
        notes
    })
})

app.delete("/api/notes/:id",async(req,res)=>{
    const {id} = req.params;
   await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Deleted Successfully"
    })
})


app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id;     
    const {course} = req.body;

    await noteModel.findByIdAndUpdate(id,{course})
    res.status(200).json({
        message:"Note Updated Successfully"
    })
});


module.exports = app;