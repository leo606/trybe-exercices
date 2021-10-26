const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const userRouter = require("./userRouter");
app.use("/user", userRouter);

app.listen(3001, () => console.log("listening on 3001"));
