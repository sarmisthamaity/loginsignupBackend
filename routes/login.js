const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const knex = require('../connection');         // require connection file


// by post api it will create the token;
router.post('/createToken', (req, res) => {
    let flag = false;           
    let email = req.body.gmail            // getting the gmail from postman body;
    let pass = req.body.password           // getting the password from postman body;

    knex()
    .select("*")
    .from('users')
    .then((data) => {   // if data is in database it will give the data;
        for( content of data){
            // checking the password and gmail are equal or not using strict equality;
            if(content.gmail === email && content.password === pass){ 
                flag = true;                               
                // creating the web token;
                let token = jwt.sign({gmail : content.gmail},"sarmi")
                res.send(token)
                console.log(token);
            }
        }if(flag){
            console.log("loggin successfully done");
        }else{
            console.log("loggin not done");
        }
    })
});

module.exports = router;