const {Product} = require("../../models");
const {sendSuccessReq} = require("../../helpers");

const getAll = async(req, res) => {
    const result = await Product.find({}, "_id name description price isActive status code");
    sendSuccessReq(res, {result});
};

module.exports = getAll;