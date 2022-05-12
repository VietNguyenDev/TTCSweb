import {UpdateCategory} from "../../services/category.service.js";
  
  const updateCategoryController = async (req, res) => {
    const { id } = req.params;
    const { name, descr, create_at, modified_at, deleted_at } = req.body;
    const { message } = await UpdateCategory({
        id, 
        name,
        descr,
        create_at,
        modified_at,
        deleted_at
    });
    return res.status(200).send({ message });
  }
  
  export default updateCategoryController;