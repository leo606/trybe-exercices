const connection = require("./connection");

function addFullNameField(author) {
  const fullName = [author.firstName, author.middleName, author.lastName]
    .filter((n) => n)
    .join(" ");

  return { ...author, fullName };
}

function serialize(author) {
  return {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
    lastName: author.last_name,
  };
}

async function getAll() {
  const [authors] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors;"
  );
  return authors.map(serialize).map(addFullNameField);
}

module.exports = { getAll };
