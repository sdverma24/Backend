// To start server and connect with database.

const app = require('./src/app');
const mongoose = require('mongoose');

function connecttoDB(){
    mongoose.connect("mongodb+srv://SDV:SDV2424@cohort.xgsrr7a.mongodb.net/").then(()=>{
        console.log("Connected to Database");
    })
}

connecttoDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

