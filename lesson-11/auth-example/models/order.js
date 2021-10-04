const Joi = require("joi");
const {Schema, model} = require("mongoose");

const orderSchema = Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    content: Joi.string().required()
});

const Order = model("order", orderSchema);

module.exports = {
    Order,
    joiSchema
}