const { Router } = require("express");
const router = Router();

const { getItems, createItem } = require("../controllers/tracks.js");

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;