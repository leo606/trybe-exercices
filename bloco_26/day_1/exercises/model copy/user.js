const connection = require("./connection");
const { ObjectId } = require("mongodb");

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

async function putUser(user, id) {
  if (!ObjectId.isValid(id)) return false;
  const { firstName, lastName, email, password } = user;
  try {
    const db = await connection();
    const update = await db
      .collection("users")
      .updateOne({_id: new ObjectId(id)}, {$set: { firstName, lastName, email, password }});
    console.log(update);
    return { id, firstName, lastName, email };
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  try {
    const db = await connection();
    const users = await db.collection("users").find().toArray();
    return users;
  } catch (error) {
    console.log(error);
  }
}

async function getUsersById(id) {
  if (!ObjectId.isValid(id)) return false;

  try {
    const db = await connection();
    const users = await db.collection("users").findOne(new ObjectId(id));
    return users;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { postUser, getUsers, getUsersById, putUser };
