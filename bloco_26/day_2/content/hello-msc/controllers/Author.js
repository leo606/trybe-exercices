const rescue = require("express-rescue");
const service = require("../services/Author");

const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();

  res.status(200).json(authors);
});

const findById = rescue((req, res) => {
  const { id } = req.params;

  const author = await service.findById(id);

  if (author.error) return res.status(404).json(author.error);

  res.status(200).json(author);
});

module.exports = { getAll, findById };
