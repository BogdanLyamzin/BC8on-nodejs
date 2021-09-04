const {program} = require("commander");

program
    .option("-a, --action <type>", "action type")
    .option("--id, <type>", "product id")
    .option("-n, --name <type>", "product name")
    .option("-p, --price <type>", "product price")
    .option("-l, --location <type>", "product location");

program.parse(process.argv);

const options = program.opts();

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

if(options.action){
    // productsWork(options.action, options);
}