import ProductModel from "../models/product.model.js"


async function getProducts() {
  return await ProductModel.query().select();
}

export default getProducts;
