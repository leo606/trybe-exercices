const Author = require("../models/Author");

const getAll = async () => Author.getAll();

const findById = async (id) => {
  try {
    const author = await Author.findById(id);
    if (!author)
      return {
        error: {
          code: "notFound",
          message: `Não foi possível encontrar um autor com o id ${id}`,
        },
      };

    return author;
  } catch (e) {
    console.log(e);
  }
};

const create = async (firstName, middleName, lastName) => {
  try {
    const existingAuthor = await Author.findByName(
      firstName,
      middleName,
      lastName
    );

    if (existingAuthor) {
      return {
        error: {
          code: "alreadyExists",
          message: "Um autor já existe com esse nome completo",
        },
      };
    }

    return Author.create(firstName, middleName, lastName);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAll,
  findById,
  create,
};
