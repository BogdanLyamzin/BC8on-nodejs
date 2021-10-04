const nodemailer = require("nodemailer");
require("dotenv").config();
// Настройки SMTP
const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 9255
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: process.env.EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "bogdan.lyamzin.d@gmail.com",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "Новый заказ с сайта",
    html: `<p>Email заказчика: </p>
            <p>Телефон заказчика: </p>
            <p>Что заказал: </p>`
};

transporter.sendMail(email)
    .then(()=> console.log("Email success send"))
    .catch(error => console.log(error.message))