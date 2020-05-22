// // ===============================================================================
// // DEPENDENCIES
// // We need to include the path package to get the correct file path for our html
// // ===============================================================================
// var path = require("path");
// // ^^^^^^^^^^^^^^^^^ important
// let app = require("express").Router();

// // ===============================================================================
// // ROUTING
// // ===============================================================================

// module.exports = function (app) {

//   // ---------------------------------------------------------------------------

//   app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
//   });



//   // If no matching route is found default to home
//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });
// };

// module.exports = app;

  
const path = require("path");

module.exports = function(app){
    
    // Route to go to notes page
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Route to go to index page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}