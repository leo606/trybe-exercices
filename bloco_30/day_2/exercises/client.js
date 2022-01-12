const net = require("net");
const rl = require("readline-sync");

const client = net.connect({ port: 8000 }, () => {
  console.log("client connected");
});

client.on("data", (data) => {
  console.log(data.toString());

  const msg = rl.question("msg to server: \n");
  client.write(msg);

  client.end();
});

client.on("end", () => {
  console.log("client disconnected");
});
