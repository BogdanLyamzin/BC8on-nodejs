const fs = require("fs");
const users = require("./users");

// console.log(users);

const {admins} = require("./users");

// console.log(admins);

// const {getCurrentMonth} = require("./date");

// console.log(`Сейчас ${getCurrentMonth()} месяц`);

const currentMonth = require("./date/getCurrentMonth")();

console.log(`Сейчас ${currentMonth} месяц`);

 const {isLeapYear} = require("./date")



