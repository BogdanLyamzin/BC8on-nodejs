const {Product} = require("../../models");

const add = async(req, res, next)=>{
    try {
        const result = await Product.create(req.body);
        res.status(201).json({
            status: "success", 
            code: 201,
            data: {
                result
            }
        });
    }
    catch(error){
        next(error);
    }
};

module.exports = add;