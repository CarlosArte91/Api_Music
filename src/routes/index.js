const { Router } = require("express");
const fs = require("fs");
const router = Router();

fs.readdirSync(__dirname).forEach(file => {
    if (file !== "index.js") {
        let name = file.split(".")[0];
        router.use(`/${name}`, require(`./${file}`));
    }
});

module.exports = router;