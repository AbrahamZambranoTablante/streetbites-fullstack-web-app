const express = require("express");
const vendors = express.Router();

vendors.get("/", (req, res) => {
    res.status(200).send("<h1>THIS AN INDEX VIEW OF VENDORS</h1>")
})

module.exports = vendors;