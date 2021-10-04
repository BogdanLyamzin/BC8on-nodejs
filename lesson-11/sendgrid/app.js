const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "bogdan.lyamzin.d@meta.ua",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новый заказ с сайта",
    html: `<p>Email заказчика: </p>
            <p>Телефон заказчика: </p>
            <p>Что заказал: </p>`
};

sgMail.send(email)
    .then(()=> console.log("Email success send"))
    .catch(error => console.log(error.message));