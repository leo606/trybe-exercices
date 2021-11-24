const MoviesModel = require("../models/moviesModel");

function isValid(title, directedBy, releaseYear) {
  if (!title || typeof title !== "string") return false;
  if (!releaseYear || typeof releaseYear !== "number") return false;
  if (!directedBy || typeof directedBy !== "string") return false;

  return true;
}

async function create({ title, directedBy, releaseYear }) {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return { id };
}

module.exports = { create };
