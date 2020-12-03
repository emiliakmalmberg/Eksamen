const express = require("express");
const bodyparser = require("body-parser")
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors())
app.use(bodyparser.json())
app.use(express.static("View"));

app.listen(port, () => console.log(`Server running on port ${port}`));

require('./Controllers/signup')(app);
require('./Controllers/login')(app);

app.get('/', function (req, res) {
        res.sendFile('html.html', { root: __dirname + "/View" });
});
