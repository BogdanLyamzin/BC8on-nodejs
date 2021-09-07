const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(cors());

app.use(async (req, res, next)=> {
    // console.log(req.method);
    // console.log(req.url);
    const {method, url} = req;
    const date = moment().format("DD.MM.YYYY-hh:mm:ss");
    await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
    next();
});

// GET /products 01.02.2021-14:30:45
// POST /contacts 01.02.2021-14:31:15

// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res, next)=> {
//     console.log("Second middleware");
//     next();
// });

// app.use("/contacts", (req, res)=> {
//     console.log(req.url);
//     res.send("Contacts");
// });

app.get("/products", (req, res)=> {
    res.json(products);
});

app.post("/products", (req, res)=> {

});
// /contacts
app.use((_, res)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

const {PORT = 3000} = process.env;
// const PORT = process.env.PORT || 3000;

app.listen(PORT);