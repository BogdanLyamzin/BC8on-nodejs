const updateProducts = require("./updateProducts");
const products = require("./products.json");

const updateById = async(id, updateData) => {
    const idx = products.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    products[idx] = {...updateData, id};
    await updateProducts(products);
    return products[idx];
};

module.exports = updateById;