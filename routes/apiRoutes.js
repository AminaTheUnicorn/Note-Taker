// // ===============================================================================
// // LOAD DATA

// // ===============================================================================

// let notesData = require("../db/store");
// let app = require("express").Router();


// // ===============================================================================
// // ROUTING
// // ===============================================================================


// // ---------------------------------------------------------------------------

// app.get("/api/notes", function (req, res) {
//   notesData = fs.readFileSync("db/db.json", "utf8");
//   console.log("hello!");

//   notesData = JSON.parse(notesData);
// });



// // ---------------------------------------------------------------------------

// app.post("/api/notes", function (req, res) {
//   notesData.push(req.body);

//   res.json(true);2
// });



// app.delete("/api/notes/:id", function (req, res) {
//   // Empty out the arrays of data
//     notesData;


//     res.json({ ok: true });
//   });

//           module.exports = app;


// Required Modules
const fs = require("fs");
const notesData = require("../db/db.json");

module.exports = function (app) {

  function writeNotes(notes)
  notes = JSON.stringify(notes);
  console.log(notes);

  fs.writeFileSync("./db/db.json", notes, (err) => {
    if (err) {
      return console.log(err)
    }
  });

}

/// POST 
app.get("/api/notes",  (req, res) => {
  res.json(notesDate)


    // UNIQUE ID

    if(notesData.length === 0) {
      req.body.id = "0";
    } else {

    }

    notesData.push(req.body);


    writeNotes(notesData);
    console.log(notesData);
  
  })