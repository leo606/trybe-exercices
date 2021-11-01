const express = require("express");
const userValidation = require("../validations/user");

const router = express.Router();

router.use(userValidation.checkFields);

router.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});

router.post("/", (req, res, next) => {
  res.status(200).send("ok");
});

module.exports = router;
