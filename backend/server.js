const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const res = require("express/lib/response");

const app = express(); //object of express
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
