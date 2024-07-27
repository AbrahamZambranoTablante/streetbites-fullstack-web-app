const express = require("express");
const vendors = express.Router();
const { getAllVendors, getTopFavorites, getVendorsByCuisine, getVendorsByBorough, getVendorsByNeighborhood, getOneVendor, createVendor, updateVendor, deleteVendor } = require("../query/vendor.js");
const { getAveragePrice } = require("./helperFunctions.js")

vendors.get("/bycuisine", async (req, res) => {
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

vendors.get("/bycuisine/:cuisine", async (req, res) => {
    const {cuisine} = req.params;
    const vendorsByCuisine = await getVendorsByCuisine(cuisine);
    if(vendorsByCuisine[0]){
        res.status(200).json(vendorsByCuisine);
    } else {
        res.status(404).json({error: "no vendors found"});
    }
})

vendors.get("/details/:id", async (req, res) => {
    const { id } = req.params;
    const vendor = await getOneVendor(id);
    if (vendor) {
        res.status(200).json(vendor);
    } else {
        res.status(404).json({error: "no vendor found"});
    }
})

vendors.get("/location/:borough", async (req, res) => {
    const { borough } = req.params;
    const vendorsByBorough = await getVendorsByBorough(borough);
    if(vendorsByBorough[0]){
        res.status(200).json(vendorsByBorough)
    } else {
        res.status(404).json({error: "no vendors found"});
    }
})

vendors.get("/location/:borough/:neighborhood", async (req, res) => {
    const {borough, neighborhood} = req.params;
    const vendorsByNeighborhood = await getVendorsByNeighborhood(borough, neighborhood);
    if(vendorsByNeighborhood[0]){
        res.status(200).json(vendorsByNeighborhood);
    } else {
        res.status(404).json({error: "no vendors found"});
    }
})

vendors.post("/new", async (req, res) => {
    const incomingVendor = await createVendor(req.body)
    res.status(200).json(incomingVendor)
})

vendors.put("/details/:id/edit", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedVendor = await updateVendor(id, req.body);
        res.status(200).json(updatedVendor);
    } catch {
        res.status(404).json({error: "no vendor found"});
    }
})

vendors.delete("/details/:id", async (req, res) => {
    const { id } = req.params;
    const removedVendor = await deleteVendor(id);
    if (removedVendor) {
        res.status(200).json(removedVendor);
    } else {
        res.status(404).json({error: "no vendor found"});
    }
})

module.exports = vendors;