// // bring pg promise, the library in charge  of connecting the server and database
// const pgp = require("pg-promise")();// have to invoke it
// require("dotenv").config()// we need to bring the variables from .env

// const cn = { //is short for connection
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE,
//     user: process.env.PG_USER
// }

// const db = pgp(cn) // db going to hold the return from pgp library function after passing in cn as a parameter. // database connect
//                    // pgp will make 1 string similar to an HTTP request - object to allow us make request to database

// db.connect() // console log message for devs to see a successful connection to the database
//     .then((cn) => {
//         const { user, host, port, database } = cn.client;
//         console.log(
//             "\x1b[43m" +
//             `Postgres connection established with user:${user}, host:${host}, port:${port}, database:${database}` +
//             "\x1b[0m"
//         );
//         cn.done();
//     })
//     .catch((error) => console.log(
//         "\x1b[41m" +
//         "database connection error" +
//         "\x1b[0m", error
//     ));

// module.exports = db;

const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
  process.env;
const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    };

const db = pgp(cn);

db.connect()
  .then((cn) => {
    const { user, host, port, database } = cn.client;
    console.log(
      "\x1b[90m" +
        `Postgres connection established with user:${user}, host:${host}, port:${port}, database:${database}` +
        "\x1b[0m"
    );
    cn.done();
  })
  .catch((error) => console.log("database connection error", error));

module.exports = db;