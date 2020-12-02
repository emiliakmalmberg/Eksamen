function update(newUser, value) {
	//Hent den eksisterende data
	var existing = localStorage.getItem(newUser);

	// Tilføj den nye data til LS array: 
	existing.push(value);

	// Save back to localStorage
	localStorage.setItem(newUser, existing.toString());

};