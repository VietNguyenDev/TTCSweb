import express from 'express';
import ProductController from './http/controllers/product.controller.js';



const router = express.Router();


router.get('/products', ProductController);
router.post('/products', ProductController);



export default router;