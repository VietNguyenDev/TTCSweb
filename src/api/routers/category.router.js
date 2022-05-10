import express from 'express';
import CategoryController from './http/controllers/category.controller.js';



const router = express.Router();


router.get('/category', CategoryController);
router.post('/category', CategoryController);



export default router;