const fs = require("fs");
const util = require("util");


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

var noteArray = [
    {
      title: "Ahmed",
      text: "ahmed@example.com"
    }
  ];

// readFileAsync("db.json", "utf8").then(function(data) {
 
// }



  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = noteArray;
