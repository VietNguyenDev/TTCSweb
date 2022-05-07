import ProductModel from "../models/product.model.js";
import { abort } from "../../helpers/errors.js";

async function GetProducts() {
  return await ProductModel.query().select();
}

async function CreateProduct({ name, buy_price, description, country, category_id, sell_price }) {
  const product = await ProductModel.query().findOne({ name });
  if (product) return abort(400, "Product already exists");
  await ProductModel.query().insert({
    name,
    buy_price,
    description,
    country,
    category_id,
    sell_price
  });
  return { message: "Product created successfully" };
}

async function DeleteProduct({ id }) {
  const product = await ProductModel.query().findById(id);
  if (!product) return abort(404, "Product not found");
  await ProductModel.query().deleteById(id);
  return { message: "Product deleted successfully" };
}

async function UpdateProduct({ id, name, buy_price, description, country, category_id, sell_price }) {
  const product = await ProductModel.query().findById(id);
  if (!product) return abort(404, "Product not found");
  await ProductModel.query().patchAndFetchById(id, {
    name,
    buy_price,
    description,
    country,
    category_id,
    sell_price
  });
  return { message: "Product updated successfully" };
}

export { GetProducts, CreateProduct, DeleteProduct , UpdateProduct};
