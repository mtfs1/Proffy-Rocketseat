const express = require("express")
const router = express.Router()

router.post("/classes", (req, res) => {
    const data = req.body
    console.log(data)
    res.json({msg: "ok"})
})

module.exports = router