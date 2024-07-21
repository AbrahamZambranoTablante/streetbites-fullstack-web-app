// import express server app
const express = require("express");
// cross origin resource sharing // allows another app to make request to server
const cors = require("cors");

const vendorsController = require("./controllers/vendorController");

// create the server app by invoking express
const app = express();


// middleware
// cross origin resource sharing // allows another app to make request to server
app.use(cors());

// allow the server to parse the body of the request into json format
app.use(express.json());

// routes
// lading page route
app.get("/", (req, res) => {

    res.status(200).send("<h1>StreetBites Server</h1>");
})

app.use("/vendors", vendorsController);

// not found route
app.get("*", (req, res) => {

    res.status(404).send("<h1>404 page not found.</h1>");
})

// export the app
module.exports = app;