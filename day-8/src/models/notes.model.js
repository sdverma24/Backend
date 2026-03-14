const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    name:String,
    course:String,
})

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;  