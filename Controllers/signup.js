//Importere file system
const fs = require('fs');
const User = require('../Model/User');

//her den sættes op med serveren
module.exports = function (app) {
    app.post('/signup', (req, res) => {
        let user = new User(
            req.body.firstName,
            req.body.lastName,
        )
        //Check at begge værdier er defined, hvis ikke returnerer 400
        if (!(user.firstName && user.lastName)) {
            res.sendStatus(400)
            return
        }
        //Læser database, med readFile funktionen
        var users
        try {
            const data = fs.readFileSync('./users.json', 'utf8')
            //Når jeg vil gemme til filen, skal det konverteres derfor:
            users = JSON.parse(data)
        } catch (err) {
            users = []
        }

        //Check om user allerede eksisterer i database
        var exists = false
            //Laver et for each loop, hvilket er en callback funktion:
        users.forEach(item => {
            if ((item.firstName == user.firstName) && (item.lastName == user.lastName)) {
                exists = true
            }
        });

        if (!exists) {
            // Tilføj user til database, hvis false ikke er opfyldt, altså hvis brugeren ikke allerede findes i databasen, 
            //så bruger vi push, og tilføjer til enden af mit array i JSON-filen users.json
            users.push(user);

            // Store database igen med writeFile, funktionen
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

    //Delete funktionen, kopiret struktur fra ovenstående
    app.delete('/signup', (req, res) => {
        let user = new User(
            req.body.firstName,
            req.body.lastName,
        )

        // Læs database
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

        // Store database igen
        try {
            fs.writeFileSync("./users.json", JSON.stringify(keptUsers))
        } catch (err) {
            res.sendStatus(500)
        }

        res.sendStatus(200)
    });
}