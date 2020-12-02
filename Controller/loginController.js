const express = require("express");
const User = require("../Model/hardUser");
const fs = require("fs");
const router = express.Router();
const dataPath = "../database";

router.post('/', (req, res) => { 

const newUser = new User (
req.body.fname,
req.body.lname,
req.body.age,
req.body.gender,
)

fs.writeFileSync(dataPath + "/"+req.body.fname +".json", JSON.stringify(newUser)), err => {
  if (err) throw error;
}

})


module.exports = router;