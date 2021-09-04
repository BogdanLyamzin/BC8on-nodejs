console.log(process.argv);

const idx = process.argv.indexOf("--action");

if(idx !== -1){
    const action = process.argv[idx + 1];

    switch (action) {
        case "add":
            
            break;
    
        default:
            break;
    }
}