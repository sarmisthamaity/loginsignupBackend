const express = require("express");
const router = express.Router();
const knex = require('../connection');

// for insert the the post api
router.post('/datainsert', (req, res) => {
    knex("users")           // using knex insert the data in table;
    .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        gmail: req.body.gmail
    }).then(() => {
        // console.log("data inserted..");
        res.send("data inserted")
    }).catch((err) => {
        // console.log(err);
        res.send(err);
    });
});

module.exports = router;