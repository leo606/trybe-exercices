const net = require("net");
const rl = require("readline-sync");

const server = net.createServer(async (conn) => {
  console.log("client connected");
  
  const msg = rl.question("message to client: \n");
  conn.write(msg);
  
  conn.on("data", (data) => console.log(data.toString()));
});

server.getConnections((err, count) => console.log(count));

server.listen(8000, () => console.log("listening 8000"));
