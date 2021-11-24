module.exports = async (_req, res, _next) => {
  try {
      res.status(201).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
  } catch (e) {
    console.log(e);
  }
};