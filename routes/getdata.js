const express = require('express');          // requireing the express;
const router = express.Router();
const knex = require('../connection');  // for connection requireing the connection file;

// get api for getting the all data exists in data base;
router.get('/getContent', (req,res) => {
    knex()                     // knex is a query builder;
    .select('*')
    .from("users")
    .then((data) => {
        res.send(data)
        console.log(data)
    })
    .catch((err) => {
        res.send(err);
        console.log(err);
    })
});

// getting the data by id which is exists in database;
router.get('/dataget/:id', (req, res) => {
    knex()
    .select("*")                     // it select all the tables;
    .from('users')
    .where({id: req.params.id})
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    });
});

module.exports = router;
