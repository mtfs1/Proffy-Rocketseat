const express = require("express")

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use("/", require("./routes/root"))

const PORT = 3030
app.listen(PORT, () => console.log(`Server Listenning on port ${PORT}`))