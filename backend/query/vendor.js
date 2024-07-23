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

module.exports = { getAllVendors, getTopFavorites }