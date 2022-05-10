import CategoryModel from "../../models/category.model.js"


async function getProductCategory() {
  return await CategoryModel.query().select();
}

export default getProductsCategory;
