// import dependencies
const express = require('express');
const path = require('path');

// instantiate router
const app = express.Router();

// returns notes.html to browser when hitting '/' endpoint
app.get('/notes', (req, res) => {
    const notePath = path.join(__dirname, '../public/notes.html');
    res.sendFile(notePath);
});

module.exports = app;