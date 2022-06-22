import {UpdateCategoryService} from "../../services/category.service.js";
  
  const updateCategoryController = async (req, res) => {
    const { id } = req.params;
    const { name, description, create_at, modified_at, deleted_at } = req.body;
    const { message } = await UpdateCategoryService({
        id, 
        name,
        description,
        create_at,
        modified_at,
        deleted_at
    });
    return res.status(200).send({ message });
  }
  
  export default updateCategoryController;