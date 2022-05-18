import {DeleteCategoryService} from '../../services/category.service.js';


async function DeleteCategoryController(req, res) {
  const { id } = req.params;
  await DeleteCategoryService({ id });
  return res.status(200).send({ message: "Product-category deleted successfully" });
}

export default DeleteCategoryController;