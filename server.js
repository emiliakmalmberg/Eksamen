//Henter min application server express:

        //FEJL KAN IKKE FINDE SERVER HVIS DENNE ER AKTIV
//const loginAuthorization = require("../Controller/signupAuthorization")

const express = require ("express");
const bodyparser = require("body-parser")
const fs = require("fs");
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors())
app.use(bodyparser.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/', function (req, res) {
        res.render('server', {});
      });



// Crud Endpoints

        //GET/ ERROR I BROWSER HVIS DENNE KØRER
//app.use("/User", loginAuthorization);








