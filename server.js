const User = require('./Model/User');

const express = require("express");
const bodyparser = require("body-parser")
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 8000;

app.use(cors())
app.use(bodyparser.json())
app.use(express.static("View"));

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/', function (req, res) {
        res.sendFile('html.html', { root: __dirname + "/View" });
});

app.post('/signup', (req, res) => {
        let user = new User(
                req.body.firstName,
                req.body.lastName,
        )

        // Check that both are defined
        if (!(user.firstName && user.lastName)) {
                res.sendStatus(400)
                return
        }

        // Read database
        var users
        try {
                const data = fs.readFileSync('./users.json', 'utf8')
                users = JSON.parse(data)
        } catch (err) {
                users = []
        }

        // Check if user already exists in database
        var exists = false
        users.forEach(item => {
                if ((item.firstName == user.firstName) && (item.lastName == user.lastName)) {
                        exists = true
                }
        });

        if (!exists) {
                // Add user to database
                users.push(user);

                // Store database again
                try {
                        fs.writeFileSync("./users.json", JSON.stringify(users))
                } catch (err) {
                        res.sendStatus(500)
                }
        }

        res.sendStatus(200)
})






