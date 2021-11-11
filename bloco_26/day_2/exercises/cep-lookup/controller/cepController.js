function cepRes(req, res) {
  const { cep } = req.query;

  res.status(200).json({ message: cep });
}

module.exports = cepRes;
