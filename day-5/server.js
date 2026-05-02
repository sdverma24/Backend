const app = require('./src/app')


const notes = [];

app.get("/notes", (req, res) => {
    res.status(200).json({
        notes:notes
    })
});


app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message:"Note created successfully"
    })
});

app.patch("/notes/:ind",(req,res) => {
    notes[req.params.ind].DEGREE = req.body.DEGREE;
    res.status(200).json({
        message:"Update Successfully"
    })
})

app.delete("/notes/:ind",(req,res) => {
    delete notes[req.params.ind];
    res.status(204).json({
            message: "Deleted Successfully"
        });
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});