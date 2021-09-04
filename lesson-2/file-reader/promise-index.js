// const fs = require("fs/promises");
const fs = require("fs").promises;

const readFile = async (filePath) => {
    const data = await fs.readFile(filePath, "utf-8");
    await fs.appendFile(filePath, " И потому ни с кем им не делится");
};

readFile("files/read.txt");

// fs.readFile("files/read.txt", "utf-8")
//     .then(data => {
//         fs.appendFile("files/read.txt", " И потому ни с кем им не делится")
//             .then(data => console.log(data))
//             .catch(error => console.log(error));
//     })
//     .catch(error => console.log(error));