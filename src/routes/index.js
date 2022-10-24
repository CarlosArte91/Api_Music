const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.send({message: "conected"});
});

module.exports.router = router;