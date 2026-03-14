const m = require("express")

const app = m() // server created
/*
app constant stores the instance of the Express application. This instance is used to set up middleware, define routes, and start the server.
*/

app.listen(3000) // starts the server