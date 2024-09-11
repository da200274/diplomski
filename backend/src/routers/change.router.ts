import express from 'express'
import { ChangeController } from '../controllers/change.controller'
import multer from 'multer'
import path from 'path';

const changeRouter = express.Router()

changeRouter.route("/change").post(
    (req,res)=>new ChangeController().change(req,res)
)

changeRouter.route("/update_photo").post(
    (req,res)=>new ChangeController().update_photo(req,res)
  )

const destinationPath = path.join(__dirname, './../../../frontend/src/assets/sweets_pics');
console.log(__dirname)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage: storage });


changeRouter.post('/add_photo', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'not ok' });
    }

    res.status(200).json({ message: file.filename });
  });

export default changeRouter;