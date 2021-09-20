const bcrypt = require("bcryptjs");

const password = "password";
const wrongPassword = "password2";

const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// console.log(hashPassword);

const result = bcrypt.compareSync(password, hashPassword);
console.log(result);

const result2 = bcrypt.compareSync(wrongPassword, hashPassword);
console.log(result2);