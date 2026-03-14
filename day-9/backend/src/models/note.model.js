const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    name:String,
    course:String,
})

const noteModel = mongoose.model("notes",noteSchema);

module.exports = noteModel;