//let User = require("./Model/hardUser.js")
//LOCAL STORAGE
function storeData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let password = document.getElementById("password").value;
    let mail = document.getElementById("mail").value;
    let bdaymonth = document.getElementById("bdaymonth").value;
    let gender = document.getElementById("gender").value;
    
    let  user = {
        name: fname,
        lastName: lname,
        Password: password, 
        Birthday: bdaymonth,
        Gender: gender, 
        Mail: mail}

//den skal hente fra min sign up, derfor /signup
fetch("http://localhost:8000/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify (user)
})      

var value = JSON.stringify([user.name, user.lastName, user.Password, user.Birthday, user.Gender, user.Mail]);
localStorage.setItem("newUser", value);
var createdUser = JSON.parse(localStorage.getItem("newUser"));
//createdUser.push(new User (user.name, user.lastName, user.Birthday, user.Gender, user.Mail));
var addUser = JSON.stringify(createdUser);
localStorage.setItem("newUser_"+fname, JSON.stringify(user));
    };


//MIN LOGINCONTROLLER/VALIDATION TIL LOGIN SIDEN er i serveren

        

