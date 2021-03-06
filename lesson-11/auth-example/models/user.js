const Joi = require("joi");
const jwt = require("jsonwebtoken");
const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");
const {generate} = require("shortid");

const userSchema = Schema({
    email: {
        type: String,
        required: [true, "Поле email обязательно"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "Поле пароль должно быть указано обязательно"],
        minlength: 6
    },
    token: {
        type: String,
        default: null
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verifyToken: {
        type: String,
        required: [true, 'Verify token is required'],
    },
}, {versionKey: false, timestamps: true});

userSchema.methods.setPassword = function(password){
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

userSchema.methods.setVerifyToken = function(password){
    this.verifyToken = generate();
}

const {SECRET_KEY} = process.env;

userSchema.methods.createToken = function(){
    const payload = {
        id: this._id
    };
    return jwt.sign(payload, SECRET_KEY);
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