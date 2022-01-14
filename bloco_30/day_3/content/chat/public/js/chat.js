const socket = window.io();

const form = document.querySelector("form");
const inputMessage = document.querySelector("#messageInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("clientMsg", inputMessage.value);
  inputMessage.value = "";
  return false;
});

function createMsg(msg) {
  const messagesUl = document.getElementById("messages");
  const li = document.createElement("li");
  li.innerHTML = msg;
  messagesUl.appendChild(li);
}

socket.on("serverMsg", createMsg);
