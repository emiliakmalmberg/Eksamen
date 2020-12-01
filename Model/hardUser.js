//Opretter en hardUser, så jeg senere kan køre test for at se om de diverse funktioner kører som de skal 
class User{
    constructor(fname,lname,age,gender){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
    }
}

module.exports = User; 
