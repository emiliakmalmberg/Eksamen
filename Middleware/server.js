//Henter min application server express:
const express = require ("express");

const app = express ();
const PORT = 8000;
const CORS = require("cors")
app.use(CORS())

const bodyparser = require("body-parser")
app.use(bodyparser.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




