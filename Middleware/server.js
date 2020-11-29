//Henter min application server express:
const express = require ("express");

const app = express ();
const PORT = 8000;

//Så man kan tjekke at serveren kører
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const users = []

//Sætter routes for vores application, og login/logud funktionen
//fortæller at application at vi vil tilgå vores data med de diverse CRUD metoder
app.use(express.urlencoded ({ extended: false}))

app.get ("/login", (req,res) =>  {
  res.render("login.html", {userName: "em20@gmail.com"})
})

app.get("/signup", (req,res) => {
  res.render("signup.html", {mail: "em20@gmail.com"})
})



//LOGINCONTROLLER
function check() {
  if(userName.value == mail.value) {
      alert('You are logged in');
  }else {
      alert('ERROR');
  }
};


