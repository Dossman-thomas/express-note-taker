// import dependencies
const express = require('express'); 
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); // needed for generating unique identifiers
const fs = require('fs'); // for interacting with the file system

const dbPath = 'db/db.json'; // stores the path to the JSON data file

// read json helper function

const readJson = () => {

  // function reads content of JSON file, parses it, and returns parsed data
  const data = fs.readFileSync(dbPath, 'utf-8'); 
  return JSON.parse(data);

};

// write json helper function

const writeJson = (data) => {

  // function takes data as an argument, converts to json string, and writes it to the json file.  
  fs.writeFileSync(dbPath, JSON.stringify(data)); 

};

// defining a route for GET requests to '/api/notes' and calls read helper function
router.get('/api/notes', (req, res) => {

  // read JSON data from file and send it as a JSON response
  const dbJson = readJson(); 
  res.json(dbJson);

});

// defining a route to handle POST requests to '/api/notes'
router.post('/api/notes', (req, res) => {

  const dbJson = readJson(); // reads existing JSON data
  // create new note object using request body and generated UUID
  const newNote = {
    title: req.body.title, 
    text: req.body.text, 
    id: uuidv4(),
  };

  dbJson.push(newNote) // pushes new note to existing db.json file
  writeJson(dbJson); // writes updated data to file
  res.json(dbJson); // sends updated data as a JSON response

})


// export router instance
module.exports = router; 