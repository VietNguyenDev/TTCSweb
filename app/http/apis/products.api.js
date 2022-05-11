import express from 'express';
import getListProducts from '../controllers/Product/getListProducts.controller.js';
import createProductController from '../controllers/Product/createProduct.controller.js';
import DeleteProductController from '../controllers/Product/deleteProduct.controller.js';
import UpdateProductController from '../controllers/Product/updateProduct.controller.js';
import { handleError } from "../../helpers/errors.js";


const apiProducts = express.Router();


apiProducts.get('/products', handleError(getListProducts));
apiProducts.post('/products', handleError(createProductController));
apiProducts.post('/products/:id', handleError(DeleteProductController));
apiProducts.put('/products/:id', handleError(UpdateProductController));


export default apiProducts;