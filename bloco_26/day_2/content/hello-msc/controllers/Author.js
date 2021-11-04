const rescue = require("express-rescue");
const service = require("../services/Author");
const joi = require("joi");

const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();

  res.status(200).json(authors);
});

const findById = rescue((req, res, next) => {
  const { id } = req.params;

  const author = await service.findById(id);

  if (author.error) return next(author.error);

  res.status(200).json(author);
});

const create = rescue(async (req, res, next) => {
  const { error } = joi
    .object({
      firstName: joi.string().not().empty().required(),
      middleName: joi.string().not().empty(),
      lastName: joi.string().not().empty().required(),
    })
    .validate(req.boby);

  if (error) return next(error);
  const { firstName, middleName, lastName } = req.body;
  const newAuthor = await service.create(firstName, middleName, lastName);

  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json({ newAuthor });
});

module.exports = { getAll, findById };
