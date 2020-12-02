const User = require("../Model/hardUser");
const fs = require("fs");
const router = express.Router();
const dataPath = "../database";

var firstname = document.getElementById("fname")
var lastname = document.getElementById("lname")
var gender = document.getElementById("gender")
var age = document.getElementById("age")

//MIN SIGN UP, SÅ NÅR MAN CREATER USER, SKAL DET GEMMES I JSON FILEN UNDER DATABASE, SÅ MAN KAN TRÆKKE DATA DERFRA
function createuser(){
  var user = {
    firstname: firstname.value,
    lastname: lastname.value,
    gender: gender.value,
    age: age.value
  }
  console.log(user)

  fetch("http://localhost:8000/User/", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(
        user
    )
  }).catch(err => {
    console.log(err)
  })

  router.post('/', (req, res) => { 

    const newUser = new User (
    req.body.fname,
    req.body.lname,
    req.body.age,
    req.body.gender,
    )
    
    fs.writeFileSync(dataPath + "/"+req.body.fname +".json", JSON.stringify(newUser)), err => {
      if (err) throw error;
    }
    
    })
};


// MIN LOGINFUNKTION, DER VALIDERER PÅ LOGINSIDEN
function login(){

    // laver variabler, til password og email
    var firstname = document.getElementById('fname')
    var lastname = document.getElementById('lname')
    
    // Vi opretter variabel, som tager værdien af firstname & lastname variablen
    let userLogin = {
    firstname: fname.value, 
    lastname: lname.value,
    }
        
        fetch('http://localhost:8000/user/login', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userLogin),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Logget ind:', data);
          localStorage.setItem("aktiv", JSON.stringify(data))  // Vi laver en local storage, som akrivere data (email + pw), med en key, som hedder "aktiv"
          window.location="account.html" // Her siger, vi at den skal åbne en ny html fil (brugerinterface), hvis
          
        })
        .catch((error) => {
          console.error('Kunne ikke logge ind:', error);
        });
      }
        

        

