const express = require('express');
const app = express(); // Create an instance of the Express application , but does not start the server yet.


app.get('/',(req,res) => 
    res.send('Hello World!!!!'); // Send a response to the client when the root URL ("/") is accessed.
});

// In the below line app.listen we can pass two parameter first one is port number and second one is callback function which will be called when server starts listening on the specified port number.
app.listen(3000 , () => {
    console.log('Server is running on port 3000'); // Log a message to the console when the server starts successfully.
});