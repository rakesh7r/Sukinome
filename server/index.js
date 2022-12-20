const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")

const io = new Server(server, {
    cors: {
        origin: "*",
    },
})

io.on("connection", (socket) => {
    console.log(`user connected :` + socket.id)
})

app.get("/", (req, res) => {
    res.send("hey there!!")
})

server.listen(4000, () => console.log("server started"))
