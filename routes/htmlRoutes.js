// Import dependencies 
const express = require('express');
const router = express.Router();
const path = require('path');

// Defining route to serve 'index.html' for the root path ('/')
router.get('/', (req, res) => {

  const indexPath = path.join(__dirname, '../public/index.html'); 
  res.sendFile(indexPath); // serves index.html from "public" directory

});

// Defining route to serve 'notes.html' from the '/notes' path.
router.get('/notes', (req, res) => {

  const notesPath = path.join(__dirname, '../public/notes.html');
  res.sendFile(notesPath); // serves notes.html from "public" directory

});

// Exporting the router
module.exports = router;