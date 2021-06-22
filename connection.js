const dotenv = require('dotenv');    // require dot env file;
dotenv.config();

// create connection with data base using knex;
const knex = require("knex")({
    client: "mysql",
    connection: {
        host: process.env.HOST,
        user: "root",
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
});

// create tables
knex.schema.hasTable("users").then((exists) => {
    if(!exists){
        return knex.schema.createTable("users", (row) => {
            row.increments('id').primary();         // id will take auto increment;
            row.string('first_name'),               // name data type will be string;
            row.string("last_name");                 
            row.string("password");
            row.string("gmail")
        });
    };
});

// export the knex;
module.exports = knex;