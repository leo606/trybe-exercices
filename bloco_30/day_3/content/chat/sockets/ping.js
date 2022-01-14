module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`user connected. ID: ${socket.id}`);
    socket.emit("hello", "welcome to the jungle");

    socket.on("ping", () => {
      console.log(`${socket.id} pingou`);

      io.emit("pong", `${socket.id} sent a ping`);
    });
  });
};
