//Min server, bruger express
const express = require ("express");

const app = express ();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Henter min controller:
const loginController =  require('./Controller/loginController')

//Mine endpoints 
server.post('/login', loginController)
