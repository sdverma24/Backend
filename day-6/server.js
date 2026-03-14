// To start server and connect with database.

const app = require('./src/app');
const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect("mongodb+srv://SDV:sdv2407@cluster0.xijdxok.mongodb.net/day-6").then(() => {
        console.log("Connected to database");
    });
}

connectToDatabase();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});