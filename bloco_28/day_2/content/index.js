const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  console.log('request');
  res.send(process.env.MESSAGE || 'no message');
});

app.listen(PORT, () => console.log("listening on port", PORT));
