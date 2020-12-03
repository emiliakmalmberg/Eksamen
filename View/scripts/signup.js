function createuser(){
  var user = {
    firstName:  document.getElementById("fname").value,
    lastName:  document.getElementById("lname").value,
  }
  
  fetch("http://localhost:8000/signup", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(user)
    
  }).catch(err => {
    console.log(err)
  })
}


        

        

