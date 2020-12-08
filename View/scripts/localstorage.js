//LOCAL STORAGE/BRUGES IKKE I SLUT RESULTAT MEN SKAL BRUGES I RAPPORTEN TIL DISKUSSION, SOM MULIG LØSNING
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

//Mulig løsning til at lave en ny unik key i localStorage for hver gang en bruger opdaterer
var value = JSON.stringify([user.name, user.lastName]);
    //Her gemmes vores key "newUser" i localStorage
localStorage.setItem("newUser", value);
var createdUser = JSON.parse(localStorage.getItem("newUser"));
var addUser = JSON.stringify(createdUser);
    //Det er her løsningen tiltænkes at lægge når der er oprettes en ny user med unikt fname
    //(...)er unikt idet man tillader fra start ikke at have det samme fornavn
localStorage.setItem("newUser_"+fname, JSON.stringify(user));
};




