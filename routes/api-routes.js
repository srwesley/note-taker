const path = require("path");
const router = require("express").Router();
const fs = require("fs");

const {v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
    console.log("\n GET note request");
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(data);
});

router.post("/notes", (req, res) => {
    console.log("--- POST");

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    console.log("\n Successfully added new note!");

    res.json(newNote);
});

router.delete("/notes", (req, res) => {
    console.log("-- Delete");
    
    let deleteNoteId = req.params.id.toString();
    console.log(`\n Delete note with id: ${deleteNoteId}`);

    let data = JSON.parse(fs.writeFileSync("./db/db.json", "utf8"));

    const newData = data.filter(note => note.id.toString() !== deleteNoteId);

    fs.writeFileSync("./db/db.json", JSON.stringify(newData));

    console.log(`\n Successfully deleted new note! : ${deleteNoteId}`);

    res.json(newData);
});

module.exports = router;