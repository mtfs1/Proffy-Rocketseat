const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use("/", require("./routes"))
app.use("/", express.static("public"))

const PORT = 3030
app.listen(PORT, () => console.log(`Server Listenning on port ${PORT}`))