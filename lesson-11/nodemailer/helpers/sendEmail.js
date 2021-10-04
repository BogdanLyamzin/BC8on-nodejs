const nodemailer = require("nodemailer");
require("dotenv").config();

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: process.env.EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async(data)=>{
    try {
        const email = {...data, from: "bogdan.lyamzin.d@meta.ua"};
        const result = await transporter.sendMail(email);
        return result;
    } 
    catch (error) {
        throw error;
    }
}

module.exports = sendEmail;