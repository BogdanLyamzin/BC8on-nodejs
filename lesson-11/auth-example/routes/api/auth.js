const express = require("express");

const {controllerWrapper, validation, authenticate} = require("../../middlewares");
const {joiSchema} = require("../../models/user");
const {auth: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", validation(joiSchema), controllerWrapper(ctrl.register));
// router.post("/signup", validation(joiSchema), controllerWrapper(ctrl.signup));

router.get("/verify/:verifyToken", controllerWrapper(ctrl.verify));

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));
// router.post("/signin", validation(joiSchema), controllerWrapper(ctrl.signin));

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));
// router.get("/signout", controllerWrapper(ctrl.signout));

module.exports = router;