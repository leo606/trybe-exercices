const socket = window.io();

const pingBtn = document.getElementById("ping-btn");

pingBtn.addEventListener("click", () => {
  socket.emit("ping");
});

function creteLi(message) {
  const ul = document.getElementById("messages");
  const li = document.createElement("li");
  li.innerHTML = message;
  ul.appendChild(li);
}

socket.on("hello", creteLi);

socket.on("pong", creteLi);
