// create the database variable 
const db = require("../db/dbConfig.js");

const getAllVendors = async () => {
    try {
        const allVendors = await db.any("SELECT * FROM vendors")
        return allVendors;
    } catch (error) {
        return error;
    }
}

const getTopFavorites = async () => {
    try {
        const topFavorites = await db.any("SELECT * FROM vendors ORDER BY likes DESC LIMIT 8")
        return topFavorites;
    } catch (error) {
        return error;
    }
}

const getVendorsByCuisine = async (type) => {
    try {
        const vendorsByCuisine = await db.any("SELECT * FROM vendors WHERE cuisine ILIKE $1", type)
        return vendorsByCuisine;
    } catch (error){
        return error;
    }
}

const getVendorsByBorough = async (borough) => {
    try {
        const vendorsByBorough = await db.any("SELECT * FROM vendors WHERE borough ILIKE $1", borough)
        return vendorsByBorough;
    } catch (error) {
        return error;
    }
}

const getVendorsByNeighborhood = async (borough, neighborhood) => {
    try {
        const vendorsByNeighborhood = await db.any("SELECT * FROM vendors WHERE borough ILIKE $1 AND neighborhood ILIKE $2", [borough, neighborhood])
        return vendorsByNeighborhood;
    } catch (error) {
        return error;
    }
}

const getOneVendor = async (id) => {
    try {
        const oneVendor = await db.one("SELECT * FROM vendors WHERE id = $1", id);
        return oneVendor
    } catch (error) {
        return error;
    }
}

const createVendor = async (vendor) => {
    const { name, phone, cuisine, address, neighborhood, borough, description, price_range, menu_photo, vendor_photo, vegan, likes } = vendor
    try {
        const incomingVendor = await db.one("INSERT INTO vendors (name, phone, cuisine, address, neighborhood, borough, description, price_range, menu_photo, vendor_photo, vegan, likes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)", [name, phone, cuisine, address, neighborhood, borough, description, price_range, menu_photo, vendor_photo, vegan, likes])
        return incomingVendor
    } catch (error) {
        return error
    }
}

module.exports = { getAllVendors, getTopFavorites, getVendorsByCuisine, getVendorsByBorough, getVendorsByNeighborhood, getOneVendor, createVendor }