module.exports = function (io) {
  io.on("connection", (socket) => {
    socket.on("clientMsg", (msg) => {
      console.log(`Message ${msg}`);
      io.emit("serverMsg", msg);
    });
  });
};
