// const createError = require("http-errors");
const {NotFound} = require("http-errors");

const {Product} = require("../../models");
const {sendSuccessReq} = require("../../helpers");

const getById = async(req, res) => {
    const {id} = req.params;
    const result = await Product.findById(id, "_id name description price isActive status code");
    // const result = await Product.findOne({_id: id});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
        // throw new createError(404, `Product with id=${id} not found`);
        // const error = new Error(`Product with id=${id} not found`);
        // error.status = 404;
        // throw error;
        // res.status(404).json({
        //     status: "error",
        //     code: 404,
        //     message: `Product with id=${id} not found`
        // });
        // return;
    }
    sendSuccessReq(res, {result});
};

module.exports = getById;