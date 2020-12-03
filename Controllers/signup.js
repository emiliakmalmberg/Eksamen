const fs = require('fs');

const User = require('../Model/User');

module.exports = function (app) {
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
                console.log(err)
                res.sendStatus(500)
                return
            }
        }

        res.sendStatus(200)
    });

    app.delete('/signup', (req, res) => {
        let user = new User(
            req.body.firstName,
            req.body.lastName,
        )

        // Read database
        var users
        try {
            const data = fs.readFileSync('./users.json', 'utf8')
            users = JSON.parse(data)
        } catch (err) {
            users = []
        }

        var keptUsers = []
        users.forEach(item => {
            if ((item.firstName == user.firstName) && (item.lastName == user.lastName)) {
                return
            }
            else {
                keptUsers.push(item)
            }
        });

        // Store database again
        try {
            fs.writeFileSync("./users.json", JSON.stringify(keptUsers))
        } catch (err) {
            res.sendStatus(500)
        }

        res.sendStatus(200)
    });
}