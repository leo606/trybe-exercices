const express = require("express");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.listen(3000, () => console.log("listening on port 3000"));
