const net = require("net");

const server = net.createServer((connection) => {
  console.log("client connected");

  connection.on("end", () => console.log("client disconnected"));

  connection.write("message from server");

  connection.pipe(connection);
});

server.listen(8080, () => {
  console.log("listening on port 8080");
});
