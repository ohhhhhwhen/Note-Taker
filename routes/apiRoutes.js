"use strict";

const noteTables = require("../db/db");
const fs = require("fs");
const path = require('path');

const updateDB = dbData => {
  fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(dbData), err => {
    if (err) throw err;
  });
};


module.exports = app => {
  app.get("/api/notes", (req, res) => res.json(noteTables));

  app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    const finalNote = { title, text, id: Math.random().toFixed(4) };
    noteTables.push(finalNote);
    updateDB(noteTables);
    res.json(noteTables);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const deleteId = req.params.id;
    const filteredNotes = noteTables.filter(note => note.id !== deleteId);
    updateDB(filteredNotes);


    res.json(noteTables);

  });
};
