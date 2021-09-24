const jwt = require("jsonwebtoken");

const header = {
    algorithm: "RS256"
};

const payload = {
    id: "6148d437c8154a1d96021d2a"
};

const SECRET_KEY = "ghgsffdhf";

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const verifyToken = jwt.verify(`${token}2`, SECRET_KEY);
    console.log(verifyToken);
} catch (error) {
    console.log(error.message);
}

