module.exports = (req, res) => {
  const { userId } = req.params;
  const { user } = req;
  res.status(501).end();
  // if (userId !== user.username) {
  // }
};
