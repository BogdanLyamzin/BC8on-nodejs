const {NotFound} = require("http-errors");

const {Product} = require("../../models");
const {sendSuccessReq} = require("../../helpers");

const removeById = async(req, res) => {
    const {id} = req.params;
    const result = await Product.findByIdAndDelete(id);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessReq(res, {result});
    // sendSuccessReq(res, {message: "Success remove"});
};

module.exports = removeById