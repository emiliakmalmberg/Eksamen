const express = require ("express");
var app = express()
//const User = require("../Model/hardUser");
const fs = require("fs");
//const router = express.Router();
const dataPath = "../database";



//MIN SIGN UP, SÅ NÅR MAN CREATER USER, SKAL DET GEMMES I JSON FILEN UNDER DATABASE, SÅ MAN KAN TRÆKKE DATA DERFRA
function createuser(){
  var firstname = document.getElementById("fname")
  var lastname = document.getElementById("lname")

  var user = {
    firstname: fname.value,
    lastname: lname.value,
  }

  fetch("http://localhost:8000/Views/signup", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(user)
    
  }).catch(err => {
    console.log(err)
  })

  app.post('/', (req, res) => { 
    const newUser = new User (
    req.body.fname,
    req.body.lname,
    )
    
    fs.writeFileSync(dataPath + "/"+req.body.fname +".json", JSON.stringify(newUser)), err => {
      if (err) throw error;
    }
    
    })
};

        

        

