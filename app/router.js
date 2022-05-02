import express from 'express';
import getList from './http/controllers/Product/getList.controller.js';
import createProductController from './http/controllers/Product/createProduct.controller.js';
import DeleteProductController from './http/controllers/Product/deleteProduct.controller.js';
import UpdateProductController from './http/controllers/Product/updateProduct.controller.js';
import { handleError } from "./helpers/errors.js";


const router = express.Router();


router.get('/products', getList);
router.post('/products', handleError(createProductController));
router.post('/products/:id', handleError(DeleteProductController));
router.put('/products/:id', handleError(UpdateProductController));


export default router;