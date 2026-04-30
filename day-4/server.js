const app = require('./src/app')

const notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.send("Note added successfully");
});

app.get("/notes",(req,res) => {
    res.send(notes);
});

app.delete("/notes/:index",(req,res) => {
    delete notes[req.params.index];
    console.log(req.params);
    res.send("Note deleted successfully");
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})