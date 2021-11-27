const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

function fileExists(filename) {
  const content = fs.readdirSync(`${__dirname}/../uploads`);
  return content.some((f) => f.endsWith(filename));
}

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png') {
      req.fileTypeError = true;
      return cb(null, false);
    }
    if (fileExists(file.originalname)) {
      req.fileExists = true;
      return cb(null, false);
    }
    cb(null, true);
  },
});

module.exports = upload.single('file');