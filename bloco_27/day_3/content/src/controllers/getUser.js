module.exports = (req, res) => {
  const { userId } = req.params;
  const { user } = req;

  if (userId !== user.username) {
    return res.status(401).json({ error: "access denied" });
  }
  res.status(200).json(user);
};
