//LOCAL STORAGE
function storeData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mail = document.getElementById("mail").value;
    let bdaymonth = document.getElementById("bdaymonth").value;
    let gender = document.getElementById("gender").value;
    
    let  User = {
        name: fname,
        lastName: lname,
        Birthday: bdaymonth,
        Gender: gender, 
        Mail: mail}

      

var value = JSON.stringify([user.name, user.lastName, user.Birthday, user.Gender, user.Mail]);
localStorage.setItem("newUser", value);
var createdUser = JSON.parse(localStorage.getItem("newUser"));
createdUser.push(new User (user.name, user.lastName, user.Birthday, user.Gender, user.Mail));
var addUser = JSON.stringify(createdUser);
localStorage.setItem("newUser", addUser);
    };


//MIN LOGINCONTROLLER/VALIDATION TIL LOGIN SIDEN
function check() {
    var storedName = localStorage.getItem('fname').value;
    var userName = document.getElementById('userName');

    if(userName.value == storedName) {
        alert('You are logged in');
    }else {
        alert('ERROR');
    }

};
        

