const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => cb(null, `${file.filename}`),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png') {
      req.fileTypeError = true;
      return cb(null, false);
    }
    cb(null, true);
  },
});

module.exports = upload.array([{ name: 'file', maxCount: 3 }]);