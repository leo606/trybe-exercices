module.exports = (req, res, _next) => {
  if (req.fileTypeError) {
    return res.status(401).json({ error: 'file must be .png' });
    }
    if (req.fileExists) {
      return res.status(401).json({ error: 'file already exists' });
      }
    res.status(200).json({ file: req.file.filename });
};