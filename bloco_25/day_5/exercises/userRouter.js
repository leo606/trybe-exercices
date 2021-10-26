const express = require("express");
const router = express.Router();
// const checkUser = require("./utils/checkUser");
const checkUser = require("./utils/checkUser");
const randomBytes = require("random-bytes");

// router.use(checkUser);

router.post("/register", checkUser, (req, res) => {
  res.status(200).json({ message: "user created" });
});

router.post("/login", (req, res) => {
  const token = randomBytes.sync(6).toString("hex");
  return res.status(200).json({ token });
});

module.exports = router;
