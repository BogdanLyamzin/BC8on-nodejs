const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const {sendResponse} = require("./helpers");
const authRouter = require("./routes/api/auth");

const app = express();

app.use(cors());
app.use(express.json());
// /api/v1/ath/register
app.use("/api/v1/auth", authRouter);

app.use((_, res)=> {
    sendResponse({res, status: 400, statusMessage: "error", data: {message: "Not found"}});
});

app.use((error, _, res, __)=> {
    const {status = 500, message = "Server error"} = error;
    sendResponse({res, status, statusMessage: "error", data: {message: "Not found"}});
});

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> app.listen(PORT))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });