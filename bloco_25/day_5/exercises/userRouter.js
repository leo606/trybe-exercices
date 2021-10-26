const express = require("express");
const router = express.Router();
const checkUser = require("./utils/checkUser");

router.use(checkUser);

router.post("/register", (req, res) => {
  res.status(200).json({ message: "registered" });
});

module.exports = router;
