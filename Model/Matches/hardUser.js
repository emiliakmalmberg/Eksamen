//Opretter en hardUser, så jeg senere kan køre test for at se om de diverse funktioner kører som de skal 
class User{
    constructor(fname,lname,Age,Gender){
        this.fname = fname;
        this.lname = lname;
        this.Age = Age;
        this.Gender = Gender;
    }
}

module.exports = User; 
