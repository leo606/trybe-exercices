const express = require("express");

const app = express();

const http = require("http").createServer(app);
app.use(express.static(__dirname + "/public"));

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

require("./sockets/ping")(io);
require("./sockets/chat")(io);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

http.listen(3000, () => console.log("listening", 3000));
