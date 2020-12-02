//Henter min application server express:
const loginAuthorization = require("../Controller/loginAuthorization")
const express = require ("express");
const bodyparser = require("body-parser")
const fs = require("fs");
const cors = require('cors');


const app = express ();
const PORT = 8000;

app.use(cors())
app.use(bodyparser.json())

// Crud Endpoints
app.use("/User", loginAuthorization);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));








