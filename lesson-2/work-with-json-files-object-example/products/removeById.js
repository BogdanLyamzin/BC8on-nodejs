const updateProducts = require("./updateProducts");
const products = require("./products.json");

const removeById = async(id) => {
    const idx = products.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    const removeProduct = products[idx];
    products.splice(idx, 1);
    // const newProducts = products.filter((_, index) => index !== idx);
    await updateProducts(products);
    // await updateProducts(newProducts);
    return removeProduct;
};

module.exports = removeById;