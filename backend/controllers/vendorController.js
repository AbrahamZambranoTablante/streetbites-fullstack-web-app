const express = require("express");
const vendors = express.Router();
const { getAllVendors } = require("../query/vendor.js");

vendors.get("/", async (req, res) => {
    const allVendors = await getAllVendors();
    if(allVendors[0]){
        res.status(200).json(allVendors);
    } else {
        res.status(404).json({error: "no vendors found"});
    }
})

module.exports = vendors;