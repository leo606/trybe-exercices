module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("conn");

    socket.on("clientMsg", (msg) => {
      console.log(`Message ${msg}`);
    });
  });
};
