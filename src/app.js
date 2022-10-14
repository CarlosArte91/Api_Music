const express = require("express");
const cors = require("cors");

const { router } = require("./routes/index.js");

const app = express();

app.use(express.json());
app.use("/api", router);

module.exports.app = app;