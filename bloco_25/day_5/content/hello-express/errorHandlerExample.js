const express = require("express");
const fs = require("fs").promises;

const app = express();

app.get("/:fileName", async (req, res, next) => {
  try {
    const file = await fs.readFile(`./${req.params.fileName}`, "utf-8");
    return res.send(file);
  } catch (e) {
    next(e);
  }
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `erro: ${err.message}` });
});

app.listen(3001);
