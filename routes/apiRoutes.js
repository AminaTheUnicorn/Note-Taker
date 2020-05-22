const fs = require("fs");
const notesInput = require("../db/db.json");

module.exports = function(app){

    function notesToDB(notes){
       
        notes = JSON.stringify(notes);
        console.log (notes);
        // Writes String back to db.json
        fs.writeFileSync("./db/db.json", notes, function(err){
            if (err) {
                return console.log(error);
            }
        });
    }

    //=== ROUTES ==========

    // GET Method 
    app.get("/api/notes", function(req, res){
        res.json(notesInput);
    });

    // POST Method 
    app.post("/api/notes", function(req, res){

        // Set unique id 
        if (notesInput.length == 0){
            req.body.id = "0";
        } else{
            req.body.id = JSON.stringify(JSON.parse(notesInput[notesInput.length - 1].id) + 1);
        }
        
        console.log("Unique ID " + req.body.id);

        // Push to JSON Array
        notesInput.push(req.body);

        // Write notes data to database
        notesToDB(notesInput);
        console.log(notesInput);

        // returns new note 
        res.json(req.body);
    });

    // DELETE Method 
    app.delete("/api/notes/:id", function(req, res){
        
        
        let id = req.params.id.toString();
        console.log(id);

        // Match ID
        for (i=0; i < notesInput.length; i++){
           
            if (notesInput[i].id == id){
                console.log("It matched!");
                // responds with deleted note
                res.send(notesInput[i]);

                // Removes deleted note
                notesInput.splice(i,1);
                break;
            }
        }

        // Write notes data to database
        notesToDB(notesInput);

    });
};
