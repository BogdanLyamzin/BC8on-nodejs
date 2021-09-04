const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const productsOperations = require("./products");

const arr = hideBin(process.argv);
// console.log(process.argv);
// console.log(arr);

const {argv} = yargs(arr);
console.log(argv);

const productsWork = async(action, argv) => {
    switch(action){
        case "getAll":
            const products = await productsOperations.getAll();
            console.log(products);
            break;
        case "add":
            const {name, price, location} = argv;
            // await productsOperations.add({name, price, location});
    }
}

if(argv.action){
    // productsWork(argv.action, argv);
}