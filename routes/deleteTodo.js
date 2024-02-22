const { Router } = require("express");
const  { del }  = require("../controller");
const router = Router();
router.delete("/delete/:id",del);

module.exports = router;
