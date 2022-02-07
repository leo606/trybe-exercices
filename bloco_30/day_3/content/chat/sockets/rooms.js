module.exports = function (io) {
  io.on("connection", (socket) => {
    socket.on("joinRoom", ({ username, room }) => {
      socket.join(room);

      socket.emit("serverMessage", `Welcome ${username}, room ${room}`);

      socket.broadcast.to(room).emit("serverMessage", `${username} joined`);

      socket.on("roomClientMessage", ({ message, room }) => {
        io.to(room).emit("serverMessage", `${username}: ${message}`);
      });
    });
  });
};
