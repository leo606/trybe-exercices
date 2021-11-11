function pingRes(_req, res) {
  res.status(200).json({ message: "pong" });
}

module.exports = pingRes;
