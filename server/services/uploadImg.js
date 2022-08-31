
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './assets/imgs/uploads/');
  },
  filename: function(req, file, cb) {
    
    // Ways to rename image file in server
    cb(null, uuidv4() + file.originalname);
    // cb(null,file.originalname);
    // cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // accept some file types
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

module.exports = upload