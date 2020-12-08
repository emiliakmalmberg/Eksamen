//Min API oprettes, der bruges express
const express = require("express");
  //"Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option."
const bodyparser = require("body-parser")
const cors = require('cors');

const app = express();
const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(cors())
app.use(bodyparser.json())
app.use(express.static("View"));


//Connecter til min signup og login funktioner der validerer brugerne
require('./Controllers/signup')(app);
require('./Controllers/login')(app);

//Connecter til Localhost, og min HTML-sider
app.get('/', function (req, res) {
        res.sendFile('html.html', { root: __dirname + "/View" });
});

app.use('/Images', express.static(__dirname +'/Images'));    

