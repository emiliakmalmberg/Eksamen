//Henter min application server express:
const express = require ("express");
const bodyparser = require("body-parser")
const fs = require("fs");
const cors = require('cors');
const loginController = require("../Controller/loginController")


const app = express ();
const PORT = 8000;

app.use(cors())
app.use(bodyparser.json())

// Crud Endpoint
app.use("/User", loginController);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






