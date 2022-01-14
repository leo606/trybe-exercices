let likeCount = 0;
let starCount = 0;

module.exports = function (io) {
  io.on("connection", (socket) => {
    socket.on("likePost", () => {
      likeCount += 1;
      socket.emit("updateLikes", likeCount);
    });

    socket.on("starPost", () => {
      starCount += 1;
      socket.emit("updateStars", starCount);
    });
  });
};
