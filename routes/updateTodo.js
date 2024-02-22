const {Router} = require("express")
const {update} = require("../controller")
const router = Router()
router.patch("/update",update)

module.exports = router;
