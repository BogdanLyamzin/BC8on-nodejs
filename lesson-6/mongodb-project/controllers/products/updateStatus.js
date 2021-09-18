const {NotFound} = require("http-errors");

const {Product} = require("../../models");
const {sendSuccessReq} = require("../../helpers");

const updateStatus = async(req, res) => {
    const {id} = req.params;
    const {status} = req.body;
    const result = await Product.findByIdAndUpdate(id, {status}, {new: true});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessReq(res, {result});
};

module.exports = updateStatus;