require("dotenv").config();
const { app } = require("./src/app.js");
const { dbConnect } = require("./src/config/mongo.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});

dbConnect();