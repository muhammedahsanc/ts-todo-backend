const { Router } = require("express");
const { get } = require("../controller");
const router = Router();
router.get("/get", get);

module.exports = router;
