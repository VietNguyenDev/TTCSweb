import express from 'express';
import getListCategoryController from '../controllers/Category/getListCategory.controller.js';
import createCategoryController from '../controllers/Category/createCategory.controller.js';
import DeleteCategoryController from '../controllers/Category/deleteCategory.controller.js';
import updateProductController from '../controllers/Product/updateProduct.controller.js';
import { handleError } from '../../helpers/errors.js';


const apiCategory = express.Router();
apiCategory.get('/category', handleError(getListCategoryController));
apiCategory.post('/category', handleError(createCategoryController));
apiCategory.post('/category/:id', handleError(DeleteCategoryController));
apiCategory.post('/category/:id', handleError(updateProductController));

export default apiCategory;