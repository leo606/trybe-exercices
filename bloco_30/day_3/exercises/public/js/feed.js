const socket = window.io();

const likeIcon = document.getElementById("likeIcon");

likeIcon.addEventListener("click", () => {
  socket.emit("likePost");
  return false;
});
