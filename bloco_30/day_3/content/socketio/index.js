const express = require("express");

const app = express();

const http = require("http").createServer(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected. ID: ${socket.id}`);
  socket.emit("hello", "welcome to the jungle");

  socket.on("ping", () => {
    console.log(`${socket.id} pingou`);

    io.emit("pong", `${socket.id} sent a ping`);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(3000, () => console.log("listening 3000"));
