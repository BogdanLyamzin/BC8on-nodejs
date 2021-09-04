const fs = require("fs");

fs.readFile("files/read.txt", "utf-8", (error, data)=>{
    if(error){
        throw error;
    }
    const nextText = "И потому ни с кем им не делится.";
    fs.appendFile("files/read.txt", nextText, ()=>{
        
    });
    // console.log(data);
    // const text = data.toString();
    // console.log(data);
    // console.log(text);
});