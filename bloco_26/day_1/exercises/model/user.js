const connection = require("./connection");

async function postUser(user) {
  const { firstName, lastName, email, password } = user;
  try {
    const [insert] = await connection.execute(
      "INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)",
      [firstName, lastName, email, password]
    );
    return { id: insert.insertId, firstName, lastName, email, password };
  } catch (error) {
    console.log(error);
  }
}

async function putUser(user, id) {
  const { firstName, lastName, email, password } = user;
  try {
    const update = await connection.execute(
      "UPDATE users SET first_name=? , last_name=?, email=?, password=? WHERE id=?",
      [firstName, lastName, email, password, +id]
    );
    console.log(update);
    return { id, firstName, lastName, email };
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  try {
    const [users] = await connection.execute(
      "SELECT * FROM users"
    );
    return users;
  } catch (error) {
    console.log(error);
  }
}

async function getUsersById(id) {
  try {
    const [users] = await connection.execute(
      "SELECT * FROM users WHERE id=?",
      [id]
    );
    return users;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { postUser, getUsers, getUsersById, putUser };
