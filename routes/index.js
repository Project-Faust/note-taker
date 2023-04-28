const express = require('express');

const apiRouter = require('./apiroutes');
const notesRouter = require('./notesroutes');

const app = express();

app.use('/api', apiRouter);
app.use('/', notesRouter);

module.exports = app;