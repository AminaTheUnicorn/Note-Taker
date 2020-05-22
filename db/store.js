const fs = require("fs");
const util = require("util");

var data = fs.readFileSync("db.json");
var db = JSON.parse(data);
console.log("db");
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

var noteArray = [
      {
        title: "Ahmed",
        text: "ahmed@example.com"
      }
    ];
  // let data = JSON.stringify(noteArray);
  // fs.writeFileSync("db.json", data)


// readFileAsync("db.json", "utf8").then(function(data) {
//   const dbJSON = JSON.stringify(data);

//   var noteArray = [
//     {
//       title: "Ahmed",
//       text: "ahmed@example.com"
//     }
//   ];

  

// writeFileAsync("db.json",dbJSON ).then(function() {
//   console.log("Successfully wrote to dogs.json file");
// });



  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = noteArray;
