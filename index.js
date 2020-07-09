var express = require("express");
var app = express();
var http = require("http").createServer(app);
var socketIO = require("socket.io")(http);
var cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

var bulletId = 0;
socketIO.on("connection", (socket) => {
    console.log("a websocket connected");
    socket.on("sendBulletScreen", (obj)=>{
        console.log(obj);
        bulletId++;
        obj["id"] = bulletId;
        socket.broadcast.emit("receiveBulletScreen", obj);
        socket.emit("receiveBulletScreen", obj);
    });
});

http.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});