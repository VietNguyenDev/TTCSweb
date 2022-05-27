import express from 'express';
import getListProducts from '../controllers/Product/getListProducts.controller.js';
import createProductController from '../controllers/Product/createProduct.controller.js';
import DeleteProductController from '../controllers/Product/deleteProduct.controller.js';
import UpdateProductController from '../controllers/Product/updateProduct.controller.js';
import { handleError } from "../../helpers/errors.js";
import { upload } from '../../utils/multer.js';
import { verifyToken } from '../middleware/authVerify.js';

const apiProducts = express.Router();

apiProducts.get('/products', verifyToken,handleError(getListProducts));
apiProducts.post('/products', verifyToken,upload.single("image"),handleError(createProductController));
apiProducts.post('/products/:id', verifyToken,handleError(DeleteProductController));
apiProducts.put('/products/:id', verifyToken, handleError(UpdateProductController));


export default apiProducts;