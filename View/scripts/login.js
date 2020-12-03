// MIN LOGINFUNKTION, DER VALIDERER PÅ LOGINSIDEN
function login(){  
    
    // Vi opretter variabel, som tager værdien af firstname & lastname variablen
    let user = {
    firstName: document.getElementById('fname').value, 
    lastName: document.getElementById('lname').value,
    }
        
        fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(user),
        })
        .then(response => {

          if (response.status == 200) {
            console.log("Ja tak")
            localStorage.setItem("loggedin", JSON.stringify(true));
            localStorage.setItem("userName", JSON.stringify(user.firstName));
            window.location="account.html" 
          }
          else if  (response.status == 404) {
            console.log("COuld not login")
          }
          else {
            console.log("What")
          }
            
          
        })
        .catch((error) => {
          console.log(user)
          console.log(error)
          console.error("Kunne ikke logge ind");
        });
      }