const net = require("net");

const client = net.connect({ port: 8080 }, () =>
  console.log("client connected")
);

client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});

client.on("end", () => console.log("client disconnected"));
