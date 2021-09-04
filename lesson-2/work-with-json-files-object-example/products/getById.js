const products = require("./products.json");

const getById = async(id) => {
    const oneProduct = products.find(item => item.id === id);
    if(!oneProduct){
        return null;
    }
    return oneProduct;
};

module.exports = getById;