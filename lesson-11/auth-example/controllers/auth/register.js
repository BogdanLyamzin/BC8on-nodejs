const bcrypt = require("bcryptjs");
// const {generate} = require("shortid");
const {User} = require("../../models");

const {sendResponse, sendEmail} = require("../../helpers");

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
    //     password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    // verifyToken: generate()
    // };
    // await User.create(newUser);
    const newUser = new User({email});
    /*
    newUser = {
        email: email
    }
    */
   newUser.setPassword(password);
   newUser.setVerifyToken();
       /*
    newUser = {
        email: email,
        password: "ghgsdfggff.fgqdfdf"
    }
    */
   const {verifyToken} = await newUser.save();
   const data = {
       to: email,
       subject: "Подтверджение email при регистрации на сайте localhost:3000",
       html: `<a 
                href="http://localhost:3000/api/v1/auth/verify/${verifyToken}"
                target="_blank">Подтвердить регистрацию</a>`
   }
   await sendEmail(data);
    sendResponse({
        res, 
        status: 201,
        data: {
            message: "Success register",
            verifyToken
        }
    });
};

module.exports = register;