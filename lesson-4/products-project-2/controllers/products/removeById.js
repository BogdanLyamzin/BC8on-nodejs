const {NotFound} = require("http-errors");

const productsOperations = require("../../model/products");

const removeById = async(req, res, next)=> {
    const {id} = req.params;
    const result = await productsOperations.removeById(id);
    if(!result) {
        throw new NotFound(`Product with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        messsage: "Product delete"
    });
};

module.exports = removeById;