const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.URI).then(()=>{
        console.log("Connected to Database Successfully");
    })
}


module.exports = connectDB;
