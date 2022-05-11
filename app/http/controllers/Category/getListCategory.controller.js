import getProductsCategory from "../../services/category.service.js";

const getListCategoryController = async (req, res) => {
  const prod_category = await getProductsCategory();
  if (prod_category.length > 0) {
    res.status(200).json(prod_category);
  } else {
    res.status(404).json({ message: "Product-category is empty" });
  }
}

export default getListCategoryController;