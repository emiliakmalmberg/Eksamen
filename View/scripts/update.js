function update(user, value) {
	var user = {
		firstName: document.getElementById("fname").value,
		lastName: document.getElementById("lname").value,
	  }
	localStorage.setItem("user", JSON.stringify(user));
};