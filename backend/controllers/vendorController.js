const express = require("express");
const vendors = express.Router();
const { getAllVendors, getTopFavorites } = require("../query/vendor.js");

vendors.get("/", async (req, res) => {
    const allVendors = await getAllVendors();
    if(allVendors[0]){
        res.status(200).json(allVendors);
    } else {
        res.status(404).json({error: "no vendors found"});
    }
})

vendors.get("/topfavorites", async (req, res) => {
    const topFavorites = await getTopFavorites();
    if(topFavorites[0]){
        res.status(200).json(topFavorites)
    } else {
        res.status(404).json({error: "no vendors have any likes"});
    }
})

module.exports = vendors;