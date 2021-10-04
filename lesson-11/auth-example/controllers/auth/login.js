const jwt = require("jsonwebtoken");

const {User} = require("../../models");
const {sendResponse} = require("../../helpers");

const {SECRET_KEY} = process.env;

const login = async(req, res) =>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user || !user.comparePassword(password) || !user.verify){
        res.status(401).json({
            status: "error",
            code: 401,
            message: "Email or password is wrong or email is not verify"
        });
        return;
     }
    // if(!user){
    //    res.status(401).json({
    //        status: "error",
    //        code: 401,
    //        message: "Email is wrong"
    //    });
    //    return;
    // }
    // if(!user.comparePassword(password)){
    //     res.status(401).json({
    //         status: "error",
    //         code: 401,
    //         message: "Password is wrong"
    //     });
    //     return;
    // }
     const payload = {
         id: user._id
     };

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
    await User.findByIdAndUpdate(user._id, {token});
    // const token = user.createToken();

    res.json({
        status: "success",
        code: 200,
        data: {
            token
        }
    })

};

module.exports = login;