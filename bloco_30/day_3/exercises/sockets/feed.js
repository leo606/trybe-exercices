let postCount = 0;

module.exports = function (io) {
  io.on("connection", (socket) => {
    socket.on("likePost", () => {
      postCount += 1;
      console.log(postCount);
    });

  });
};
