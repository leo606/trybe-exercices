const socket = window.io();

const form = document.querySelector("form");
const inputMessage = document.querySelector("#messageInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("clientMsg", inputMessage.value);
  inputMessage.value = '';
  return false;
});
