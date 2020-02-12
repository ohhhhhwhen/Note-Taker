'use strict'

const noteTables = require('../db/db');

module.exports = app => {    
    app.get("/api/notes", (req, res) => res.json(noteTables)); 

    app.post("/api/notes/:id", (req,res) => {
        const id = req.params.id
        const note = noteTables.filter(note => note.id === id)
        res.json(note)
      });

    app.post("/api/notes", (req, res) => {
      const newNotes = req.body;
      noteTables.push(newNotes);
      res.json(newNotes);
    });

    app.delete('/api/notes/:id', (req, res) => {
        delete noteTables[id];
        tables = tables.slice(id);
        return res.json(noteTables);
    });
};