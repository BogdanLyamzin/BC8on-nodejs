const {v4} = require("uuid");

const products = require("./products.json");
const updateProducts = require("./updateProducts");

const add = async(newData) => {
    const newProduct = {...newData, id: v4()};
    // const newProducts = [...products, newProduct];
    products.push(newProduct);
    await updateProducts(products);
    // await updateProducts(newProducts);
    return newProduct;
};

module.exports = add;