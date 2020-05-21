// ===============================================================================
// LOAD DATA

// ===============================================================================

let noteData = require("../db/store");
let app = require("express").Router();


// ===============================================================================
// ROUTING
// ===============================================================================


// ---------------------------------------------------------------------------

app.get("/api/notes", function (req, res) {
  res.json(noteData);
});



// ---------------------------------------------------------------------------

app.post("/notes", function (req, res) {
  noteData.push(req.body);
  res.json(true);
});



app.delete("/notes/:id", function (req, res) {
  // Empty out the arrays of data
    noteData;
    
    
    res.json({ ok: true });
  });

          module.exports = app;
