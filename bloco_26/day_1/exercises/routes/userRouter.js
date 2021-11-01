const express = require("express");
const userValidation = require("../validations/user");

const router = express.Router();

router.use(
  userValidation.checkFields,
  userValidation.checkPassword,
  userValidation.checkFirstname,
  userValidation.checkLastname,
  userValidation.checkEmail
);

router.use((err, req, res, next) => {
  res.status(err.status).json({ error: true, message: err.message });
});

router.post("/", (req, res, next) => {
  res.status(200).json({ message: "ok" });
});

module.exports = router;
