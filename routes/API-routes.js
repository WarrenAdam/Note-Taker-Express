const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

// get request api/notes
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(dbJson);
  });

  // post request for api/notes
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const feedback = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(feedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
  });
  
  //  delete request for /api/notes/:id
  router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("db/db.json", "utf8");
    const jsonData =  JSON.parse(data);
    const updatedNote = jsonData.filter((note) => { 
      return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json",JSON.stringify(updatedNote));
    res.json("Note removed");
  });
  
  module.exports = router; 