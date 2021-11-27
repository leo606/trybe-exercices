module.exports = async (req, res, next) => {
  try {
    const { admin } = req.user;
    if (!admin) {
      return res.status(401).json({ message: 'Restricted access' });
    }
    next();
  } catch (e) {
    console.log(e);
  }
};