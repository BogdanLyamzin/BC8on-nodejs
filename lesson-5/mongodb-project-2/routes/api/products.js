const express = require("express");

const {products: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/", ctrl.add);

module.exports = router;