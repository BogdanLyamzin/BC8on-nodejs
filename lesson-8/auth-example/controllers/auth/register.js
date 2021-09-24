const bcrypt = require("bcryptjs");

const {User} = require("../../models");
const {sendResponse} = require("../../helpers");

const register = async(req, res) => {
    const {email, password} = req.body;
    const result = await User.findOne({email});
    if(result){
        sendResponse({
            res, 
            status: 409, 
            statusMessage: "error", 
            data: {message: "Already register"}
        });
        return;
    }
    // const newUser = {
    //     email, 
    //     password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    // };
    // await User.create(newUser);
    const newUser = new User({email});
    /*
    newUser = {
        email: email
    }
    */
   newUser.setPassword(password);
       /*
    newUser = {
        email: email,
        password: "ghgsdfggff.fgqdfdf"
    }
    */
   await newUser.save();
    sendResponse({
        res, 
        status: 201,
        data: {message: "Success register"}
    });
};

module.exports = register;