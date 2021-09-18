const {NotFound} = require("http-errors");

const {Product} = require("../../models");
const {sendSuccessReq} = require("../../helpers");

const updateById = async(req, res)=> {
    const {id} = req.params;
    const result = await Product.findByIdAndUpdate(id, req.body, {new: true});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessReq(res, {result});
};

module.exports = updateById;