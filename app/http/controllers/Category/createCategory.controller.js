import { CreateCategoryService } from "../../services/category.service.js";

const createCategoryController = async (req, res) => { 
  const {name, description, create_at, modified_at, deleted_at } = req.body;
  const {message} =  await CreateCategoryService({name, description, create_at, modified_at, deleted_at });
  return res.status(201).send(message);
  
}

export default createCategoryController;