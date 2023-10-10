// 1. Import express.
import express from 'express';
// import multer from 'multer';
import CSVController from '../controllers/csv.controller.js';
import { uploadFile } from '../middlewares/file-upload.middleware.js';

// 2. Initialize Express router.
const csvRouter = express.Router();
const csvController = new CSVController();
// const csvController = new CSVController();


csvRouter.get('/', csvController.home);
csvRouter.post('/upload', uploadFile.single('csv') ,csvController.uploadFile);
csvRouter.get('/csv/:id', csvController.view);
csvRouter.get('/delete/:id', csvController.deleteCSV);


// module.exports = router;
export default csvRouter;

