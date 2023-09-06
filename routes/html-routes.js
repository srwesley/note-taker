// Dependencies
const path = require("path");
const router = require("express").Router();

// This route handles GET requests to the "/notes" endpoint
router.get("/notes", (req, res) => {
    // When this route is accessed, it sends the notes.html file as the response
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// This route handles all other GET requests that aren't specifically defined
router.get("*", (req, res) => {
    //When this route is accessed, it sends the index.html file as the response
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// This line exports the router instance to be used by other parts of the app
module.exports = router;