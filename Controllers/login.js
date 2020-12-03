const fs = require('fs');
const User = require('../Model/User');

module.exports = function (app) {

    app.post('/login', (req, res) => {
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

        // Check if user already exists in database
        var exists = false
        users.forEach(item => {
            if ((item.firstName == user.firstName) && (item.lastName == user.lastName)) {
                exists = true
            }
        });

        if (exists) {
            res.sendStatus(200)
            return
        }
        else {
            res.sendStatus(404)
            return
        }

    })
}