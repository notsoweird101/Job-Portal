const mongoose = require("mongoose");
dbConnect()
async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://shailesh0302:Mayuri430@cluster0.afa2lhx.mongodb.net/OHP');
        console.log("Connected to Database")
    } catch (err) {
        console.log("Database Connection Failed")
    }

}

module.exports = mongoose