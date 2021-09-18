const {Product} = require("../../models");
const {sendSuccessReq} = require("../../helpers");

const add = async(req, res)=>{
    const result = await Product.create(req.body);
    sendSuccessReq(res, {result}, 201);
    // res.status(201).json({
    //     status: "success", 
    //     code: 201,
    //     data: {
    //         result
    //     }
    // });
};

module.exports = add;