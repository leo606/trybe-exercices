const express = require("express");

const app = express();
app.use(express.json());

const userRouter = require("./userRouter");
app.use("/user", userRouter);

app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.err });
});

app.listen(3001, () => console.log("listening on 3001"));
