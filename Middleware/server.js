//Min server, bruger express
const express = require ("express");

const app = express ();
const PORT = 8000;

//Middleware delen, er dette selve min middleware og server?
//app.get('/', function (req, res) {
  //})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

