// import dependencies
const app = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// import file path to db storage
const notesPath = path.join(__dirname, '../db/db.json');

// function to return data of GET from note file path
function getNotes() {
    const noteData = fs.readFileSync(notesPath, 'utf-8');
    return JSON.parse(noteData);
};

//function to SET data to note file path
function setNotes(notes) {
    fs.writeFileSync(notesPath, JSON.stringify(notes, null, 2));
};

// GET route to render list of notes
app.get('/notes', (req, res) => {
    const data = getNotes();
    res.json(notes);
});



module.exports = app;