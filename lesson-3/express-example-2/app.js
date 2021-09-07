const express = require("express");

const products = require("./products");

const app = express();

app.set("json space", 8);

app.get("/products", (req, res)=> {
    // res.send(null);
    // res.json(null);
    res.json(products);
    // res.send(products);
});

app.post("/products", (req, res)=> {
    res.send({status: "success"})
})

app.listen(4000);