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

const updateVendor = async (id, vendorUpdate) => {
    const { name, phone, cuisine, address, neighborhood, borough, description, price_range, menu_photo, vendor_photo, vegan, likes } = vendorUpdate
    try {
        const updatedVendor = await db.one("UPDATE vendors SET name = $1, phone = $2, cuisine = $3, address = $4, neighborhood = $5, borough = $6, description= $7, price_range = $8, menu_photo = $9, vendor_photo = $10, vegan = $11, likes = $12 WHERE id = $13 RETURNING *", [ name, phone, cuisine, address, neighborhood, borough, description, price_range, menu_photo, vendor_photo, vegan, likes, id ]);
        return updatedVendor;
    } catch (error) {
        return error
    }
}

const deleteVendor = async (id) => {
    try {
        const removedVendor = await db.one("DELETE FROM vendors WHERE id = $1 RETURNING *", id)
        return removedVendor
    } catch (error) {
        return error
    }
}

module.exports = { getAllVendors, getTopFavorites, getVendorsByCuisine, getVendorsByBorough, getVendorsByNeighborhood, getOneVendor, createVendor, updateVendor, deleteVendor, updateVendorLikes}