import multer from "multer";

const storage = multer.diskStorage({
  //diskStorage is where we store the uploaded files
  destination: function (req, file, cb) {
    // destination defines the folder where the uploaded files will be saved
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //originalfile means the user local machine file name
  },
});

export const upload = multer({
  storage,
});

// Production grid file uploader using multer

// import express from 'express';
// import multer from 'multer';
// import path from 'path';

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, 'uploads');
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// function checkFileTypes(file, cb) {
//   const filetypes = /jpeg|jpg|png/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb('Only images are allowed');
//   }
// }

// const upload = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     checkFileTypes(file, cb);
//   },
// });

// router.post('/', upload.single('image'), (req, res) => {
//   res.send(`/${req.file.path}`);
// });

// export default router;
