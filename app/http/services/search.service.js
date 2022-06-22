import ProductModel from "../models/product.model.js";

export async function searchService(name) {
  try {
    const products = await ProductModel.query().where(
      "name",
      "like",
      `%${name}%`
    );

    return products;
  } catch (error) {
    return abort(404, error.message);
  }
}
