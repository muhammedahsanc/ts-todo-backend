const { Router } = require("express");
const { add } = require("../controller");
const router = Router();
router.post("/add", add);


module.exports = router;