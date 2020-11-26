//LOCAL STORAGE
function storeData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mail = document.getElementById("mail").value;
    let bdaymonth = document.getElementById("bdaymonth").value;
    let gender = document.getElementById("gender").value;
    
    //så jeg kan oprette min key, med efterfølgende value af array
    let user = {
        name: fname,
        lastName: lname,
        Birthday: bdaymonth,
        Gender: gender 
    }
    //min localestorage
    localStorage.setItem("New User",[user.name, user.lastName, user.Birthday, user.Gender]);}

//MIN LOGINCONTROLLER/VALIDATION TIL LOGIN siden
function check() {
    // stored data fra sign up formen i ls
    var storedName = localStorage.getItem('fname').value;
    // data fra the login-form
    var userName = document.getElementById('userName');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName) {
        alert('You are logged in');
    }else {
        alert('ERROR');
    }};
        

