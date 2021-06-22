const express = require('express');    // require express;
const router = express.Router();
const jwt = require('jsonwebtoken');      // require jwt for checking authentication;
const knex = require('../connection');

// update the data by authentication;
router.put('/check', (req, res) => {
    // jwt is verify the authentication;
    var tokenCheck = jwt.verify(req.headers.authorization, "sarmi")
    knex("users")
    .where({gmail: tokenCheck.gmail}).update(req.body)
    .then(() => {
        res.send("data updated...");
        //console.log("data updated...");
    }).catch((err) => {
        //console.log(err);
        res.send(err);
    });
});

// export the router;
module.exports = router;