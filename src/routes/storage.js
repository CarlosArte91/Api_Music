const { Router } = require("express");
const router = Router();

const { uploadFiles } = require("../controllers/storage.js");
const multerMiddleware = require("../utils/handleStorage.js");

router.post("/", multerMiddleware, uploadFiles);

module.exports = router;