// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// creating an "express" server
var app = express();

// initial port
var PORT = process.env.PORT || 8080;

// Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static for Heroku
app.use(express.static("public"));
// ================================================================================
// ROUTER
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });
  