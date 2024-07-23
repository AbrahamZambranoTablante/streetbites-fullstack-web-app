function getAveragePrice (string) {
    const newString = string.replace("$", "").split("-");
    return (+newString[0] + +newString[1]) / 2;
    
}

module.exports = { getAveragePrice }