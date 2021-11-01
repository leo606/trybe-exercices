const connection = require("./connection");

async function postUser(user) {
  const { firstName, lastName, email, password } = user;
  try {
    const db = await connection();
    const insert = await db
      .collection("users")
      .insertOne({ firstName, lastName, email, password });
    return { id: insert.insertedId, firstName, lastName, email };
  } catch (error) {
    console.log(error);
  }
}

module.exports = { postUser };
