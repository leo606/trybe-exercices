module.exports = async (req, res, _next) => {
  try {
    const { user, admin } = req.user;
    res.status(200).json({ user, admin });
  } catch (e) {
    console.log(e);
  }
};