
  //her gemmer vi vores brugers oplysninger i en mappe
  /*
const fs = require('fs');
let dataarray = JSON.parse(fs.readFileSync('user.json'))
dataarray.push(user)

fs.writeFile('user.json', JSON.stringify(dataarray, null, 4), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});*/


/*
//LOGINCONTROLLER/VALIDATION *virker gemmer i server
app.use(express.urlencoded ({ extended: false}))

  //Bruger POST og PUT grundet de tager imod bodys, her "poster" vi vores signup form, dette kan testes nede i terminalen
  //Kan nu se at brugeren bliver gemt i serveren i terminalen
app.post("/signup", (req,res) => {
  console.log(req.body)
})



//LOGINCONTROLLER DEN SKAL DER ARBEJDES VIDERE PÅ
function check() {
  if(userName.value == mail.value) {
      alert('You are logged in');
  }else {
      alert('ERROR');
  }
};*/

