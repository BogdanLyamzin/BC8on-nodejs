const Joi = require("joi");
const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = Schema({
    email: {
        type: String,
        required: [true, "Поле email обязательно"]
    },
    password: {
        type: String,
        required: [true, "Поле пароль должно быть указано обязательно"],
        minlength: 6
    }
}, {versionKey: false, timestamps: true});

userSchema.methods.setPassword = function(password){
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

const joiSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string()
});

const User = model("user", userSchema);

module.exports = {
    User,
    joiSchema
}