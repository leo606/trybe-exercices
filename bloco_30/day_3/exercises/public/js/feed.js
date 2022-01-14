const socket = window.io();

const likeIcon = document.getElementById("likeIcon");
const starIcon = document.getElementById("starIcon");

likeIcon.addEventListener("click", () => {
  socket.emit("likePost");
  return false;
});

starIcon.addEventListener("click", () => {
  socket.emit("starPost");
  return false;
});

function updateCount(count, item) {
  const itemToUpdate = document.getElementById(item);
  itemToUpdate.innerHTML = count;
}

socket.on("updateLikes", (msg) => updateCount(msg, "currentLikes"));
socket.on("updateStars", (msg) => updateCount(msg, "currentStars"));
