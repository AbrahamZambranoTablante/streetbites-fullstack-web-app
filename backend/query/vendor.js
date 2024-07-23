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

module.exports = { getAllVendors }