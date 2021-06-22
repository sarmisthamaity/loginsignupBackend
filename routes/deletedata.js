const express = require('express');
const router = express.Router();
const knex = require('../connection');              // requireing the connection file;
const jwt = require('jsonwebtoken');

// delete api is for deleting the data;
router.delete('/datadel', (req, res) => {
    // first it will check the authentication of users;
    var tokenCheck = jwt.verify(req.headers.authorization, "sarmi");
    console.log(tokenCheck);
    knex("users")
    .where({gmail: tokenCheck.gmail}).del()     // after checking the authentication it will delete the data;
    .then(() => {
        console.log("data deleted...");
        res.send("data deleted...");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});

module.exports = router;