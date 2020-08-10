const express = require("express")
const router = express.Router()

router.use("/classes", require("./controllers/classes"))

module.exports = router