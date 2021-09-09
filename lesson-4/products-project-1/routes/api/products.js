const express = require("express");
const Joi = require("joi");

const productsOperations = require("../../model/products");

const joiProductSchema = Joi.object({
    name: Joi.string().min(1).required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().min(1).required(),
});

const router = express.Router();

router.get("/", async (req, res, next)=> {
    try {
        const products = await productsOperations.getAll();
        res.json({
            status: "success",
            code: 200,
            data: {
                result: products
            }
        });
    }
    catch(error){
        next(error);
    }
});

router.get("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const product = await productsOperations.getById(id);
        if(!product) {
            const error = new Error(`Product with id=${id} not found`);
            error.status = 404;
            throw error;
            // return res.status(404).json({
            //     status: "error",
            //     code: 404,
            //     message: `Product with id=${id} not found`
            // });
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result: product
            }
        })
    }
    catch(error){
        // if(error.message.includes("Not found")){
        //     error.status = 404;
        // }
        next(error);
    }
});

router.post("/", async(req, res, next)=>{
    try {
        const {error} = joiProductSchema.validate(req.body);
        if(error){
            const err = new Error(error.message);
            err.status = 400;
            throw err;
        }
        const result = await productsOperations.add(req.body);
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
});

router.put("/:id", async(req, res, next)=> {
    try {
        const {error} = joiProductSchema.validate(req.body);
        if(error){
            const err = new Error(error.message);
            err.status = 400;
            throw err;
        }
        const {id} = req.params;
        const result = await productsOperations.updateById(id, req.body);
        if(!result) {
            const error = new Error(`Product with id=${id} not found`);
            error.status = 404;
            throw error;
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){
        next(error);
    }
});

router.delete("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await productsOperations.removeById(id);
        if(!result) {
            const error = new Error(`Product with id=${id} not found`);
            error.status = 404;
            throw error;
        }
        res.json({
            status: "success",
            code: 200,
            messsage: "Product delete"
        });
    }
    catch(error){
        next(error);
    }
})

module.exports = router;