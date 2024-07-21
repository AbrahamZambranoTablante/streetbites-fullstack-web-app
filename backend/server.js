//import app from app.js
const app = require("./app.js");
//configure the package dotenv so we can use process method for importing values from .env file
require("dotenv").config();
// assign variable PORT to hold the value from .env file
const PORT = process.env.PORT;

//call listen method for app, and its gonna listen from PORT its going to display what port its lisening on the console
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
});
