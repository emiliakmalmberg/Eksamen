//Min server, bruger express
const express = require ("express");

const app = express ();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Henter min controller:
const loginController =  require('./Controller/loginController')
const protectedController = require('./Controller/Protectedcontroller')

//henter middleware
const ensureToken = require('./Middleware/token')

//Mine endpoints 
server.get('/protected', ensureToken,  protectedController)
server.post('/login', loginController)
