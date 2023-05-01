// import dependencies
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// save file path to db storage as notesPath variable
const notesPath = path.join(__dirname, '../db/db.json');

// function to return data of GET from note file path
function getNotes() {
    const noteData = fs.readFileSync(notesPath, 'utf-8');
    return JSON.parse(noteData);
};

// GET route to render list of notes
router.get('/notes', (req, res) => {
    const data = getNotes();
    res.json(notes);
});

// function to SET data to note file path
function setNotes(notes) {
    fs.writeFileSync(notesPath, JSON.stringify(notes));
};

// POST route to save new note
router.post('/notes', (req, res) => {
    const newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
    };

    const notesArray = getNotes();
    notesArray.push(newNote);
    setNotes(notesArray);
});

module.exports = router;