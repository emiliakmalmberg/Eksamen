// MIN LOGINFUNKTION, DER VALIDERER PÅ LOGINSIDEN
function login(){

    // laver variabler, til password og email
    var firstname = document.getElementById('fname')
    var lastname = document.getElementById('lname')
    
    // Vi opretter variabel, som tager værdien af firstname & lastname variablen
    let userLogin = {
    firstname: fname.value, 
    lastname: lname.value,
    }
        
        fetch('http://localhost:8000/View/login', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(userLogin),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Logget ind:', data);
          localStorage.setItem("aktiv", JSON.stringify(data))  // Vi laver en local storage, som akrivere data (email + pw), med en key, som hedder "aktiv"
          window.location="account.html" // Her siger, vi at den skal åbne en ny html fil (brugerinterface), hvis
          
        })
        .catch((error) => {
          console.error('Kunne ikke logge ind:', error);
        });
      }