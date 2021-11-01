const express = require("express");
const userValidation = require("../validations/user");
const user = require("../model/user");

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

router.post("/", async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const inserted = await user.postUser({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).json(inserted);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
