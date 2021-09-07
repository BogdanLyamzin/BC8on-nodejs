const express = require("express");

const app = express();

app.get("/", (request, response)=>{
    // console.log(request.url);
    // console.log(request.headers);
    response.send("<h2>Главная страница</h2>");
});

app.get("/about-us", (req, res)=> {
    res.send("<h2>О нас</h2>");
});

app.get("/contacts", (req, res)=> {
    res.send("<h2>Наши контакты</h2>");
})

app.listen(4000);

