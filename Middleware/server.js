//Henter min application server express:
const express = require ("express");

const app = express ();
const PORT = 8000;
const CORS = require("cors")
app.use(CORS())

const bodyparser = require("body-parser")
app.use(bodyparser.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



//START AF LOGINCONTROLLER
const users = []
//Sætter routes for vores application, og login/logud funktionen
//fortæller at application at vi vil tilgå vores data med de diverse CRUD metoder
app.use(express.urlencoded ({ extended: false}))

//post&pout grundet de tager imod bodys, her "poster" vi vores signup form, dette kan testes nede i terminalen
app.post("/signup", (req,res) => {
  console.log(req.body)
})
  //her gemmer vi vores brugers oplysninger i en mappe
const fs = require('fs');
let dataarray = JSON.parse(fs.readFileSync('user.json'))
dataarray.push(user)

fs.writeFile('user.json', JSON.stringify(dataarray, null, 4), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});


//LOGINCONTROLLER DEN SKAL DER ARBEJDES VIDERE PÅ
function check() {
  if(userName.value == mail.value) {
      alert('You are logged in');
  }else {
      alert('ERROR');
  }
};


