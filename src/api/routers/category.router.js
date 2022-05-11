import express from 'express';
import CategoryController from '../controllers/category.controller.js';



const router1 = express.Router();


router1.get('/category', CategoryController);
router1.post('/category', CategoryController);



export default router1;