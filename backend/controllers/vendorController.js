const express = require("express");
const vendors = express.Router();
const { getAllVendors, getTopFavorites } = require("../query/vendor.js");
const { getAveragePrice } = require("./helperFunctions.js")

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
});

vendors.get("/cheapest", async (req, res) => {
    const allVendors = await getAllVendors();
    const cheapestVendors = allVendors.sort((a,b) => getAveragePrice(a.price_range) - getAveragePrice(b.price_range));
    if(cheapestVendors[0]){
        res.status(200).json(cheapestVendors);
    } else {
        res.status(404).json({error: "no vendors found"});
    }
})

module.exports = vendors;