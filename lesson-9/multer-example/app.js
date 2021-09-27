const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs/promises");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");

const multerSetting = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDir);
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 2058
    }
});

const uploadMiddleware = multer({
    storage: multerSetting
});

const productsDir = path.join(__dirname, "public/products");

app.post("/api/products", uploadMiddleware.single("photo"), async(req, res)=>{
    const {path: tempStorage, originalname} = req.file;
    const resultStorage = path.join(productsDir, originalname);
    await fs.rename(tempStorage, resultStorage);
});

app.get("/api/products", async(req, res)=>{
    res.json([
        {
            name: "2085-1",
            photo: "/products/2085-1.png"
        }
    ])
});

app.listen(3000);
