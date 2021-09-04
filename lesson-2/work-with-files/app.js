const fs = require("fs/promises");

const filePath = "file.txt";

(async()=>{
    try {
        // const result = await fs.readFile(filePath, "utf-8");
        // console.log(result);

        // const result2 = await fs.appendFile(filePath, "\nИдешь к женщине - возьми с собой котика");
        // console.log(result2);

        // const result3 = await fs.writeFile(filePath, "Ничего я не говорил!");
        // console.log(result3);
    }
    catch(error){
        console.log(error.message);
    }
})();