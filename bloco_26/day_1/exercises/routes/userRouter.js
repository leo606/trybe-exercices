const express = require("express");
const userValidation = require("../validations/user");
const user = require("../model/user");

const router = express.Router();

router.use((err, req, res, next) => {
  res.status(err.status).json({ error: true, message: err.message });
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const userFound = await user.getUsersById(id);
    if (!userFound) return res.status(404).json({ message: "not found" });
    res.status(200).json(userFound);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const users = await user.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.use(
  userValidation.checkFields,
  userValidation.checkPassword,
  userValidation.checkFirstname,
  userValidation.checkLastname,
  userValidation.checkEmail
);

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

router.put("/:id", async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;
  try {
    const update = await user.putUser(
      { firstName, lastName, email, password },
      id
    );

    if (!update) return res.status(402).json({ message: "not found" });
    res.status(201).json(update);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
