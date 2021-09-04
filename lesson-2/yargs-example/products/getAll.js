// const fs = require("fs/promises");
// const path = require("path");

// const filePath = path.join(__dirname, "products.json");

const products = require("./products.json");

const getAll = async () => {
    return products;
    // const data = await fs.readFile("products.json");
    // const products = JSON.parse(data);
    // return products;
};

module.exports = getAll;