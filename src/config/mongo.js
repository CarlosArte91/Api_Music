require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) console.log("*** CONECT DB MONGO ***");
        else console.log("*** DB MONGO ERROR ***");
    });
};

module.exports.dbConnect = dbConnect;
