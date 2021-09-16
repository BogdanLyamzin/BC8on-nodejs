const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();
const {DB_HOST} = process.env;
// const file = require("./module");

const {Schema, model} = mongoose;

const productSchema = Schema({
    name: String,
    description: String,
    price: Number
});

const Product = model("product", productSchema);
// categories => category
// mice => mouse

const newProduct = {
    name: "iPhone X",
    description: "Лучший подарок на Новый Год",
    price: 17000
}

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    // Product.create(newProduct, (error, data)=>{
    //     console.log(error);
    //     console.log(data);
    // });
    Product.find({}, (error, data)=> {
        if(error){
            return;
        }
        console.log(data);
    })
    // console.log("Database connect");
})
.catch(error => console.log(error.message));