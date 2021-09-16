const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Bogdan:pBje6ZbFRATcsTq@cluster0.ubani.mongodb.net/online_shop?retryWrites=true&w=majority"

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connect");
})
.catch(error => console.log(error.message));