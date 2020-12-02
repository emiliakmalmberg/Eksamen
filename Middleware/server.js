//Henter min application server express:
const express = require ("express");
const loginAuthorization = require("../Controller/loginAuthorization")
const bodyparser = require("body-parser")
const fs = require("fs");
const cors = require('cors');


const app = express();
const PORT = 8000;

app.use(cors())
app.use(bodyparser.json())

// Crud Endpoints

//DET ER HER MIN FEJL ER!
        //app.use("/User", loginAuthorization);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));








