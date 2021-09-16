const {Schema, model} = require("mongoose");

const productSchema = Schema({
    name: {
        type: String,
        required: [true, "Имя обязательно"]
    },
    description: String,
    price: Number
});

const Product = model("product", productSchema);

module.exports = Product;