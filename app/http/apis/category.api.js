import express from 'express';
import getListCategoryController from '../controllers/Category/getListCategory.controller.js';

const apiCategory = express.Router();
apiCategory.get('/category', getListCategoryController);
// apiCategory.post('/category', CategoryController);

export default apiCategory;