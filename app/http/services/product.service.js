import ProductModel from "../models/product.model.js";
import { abort } from "../../helpers/errors.js";

async function GetProducts() {
  return await ProductModel.query().select();
}

async function CreateProduct({ id, name, buy_price, sell_price, description, country, create_at, modified_at, category_id, discount_id, deleted_at, inventory_id }) {
  const product = await ProductModel.query().findOne({ name });
  if (product) return abort(400, "Product already exists");
  await ProductModel.query().insert({
    id,
    name,
    buy_price,
    sell_price,
    description,
    country,
    create_at,
    modified_at,
    category_id,
    discount_id,
    deleted_at,
    inventory_id
  });
  return { message: "Product created successfully" };
}

async function DeleteProduct({ id }) {
  const product = await ProductModel.query().findById(id);
  if (!product) return abort(404, "Product not found");
  await ProductModel.query().deleteById(id);
  return { message: "Product deleted successfully" };
}

async function UpdateProduct({ id, name, buy_price, sell_price, description, country, create_at, modified_at, category_id, discount_id, deleted_at, inventory_id }) {
  const product = await ProductModel.query().findById(id);
  if (!product) return abort(404, "Product not found");
  await ProductModel.query().patchAndFetchById(id, {
    id,
    name,
    buy_price,
    sell_price,
    description,
    country,
    create_at,
    modified_at,
    category_id,
    discount_id,
    deleted_at,
    inventory_id
  });
  return { message: "Product updated successfully" };
}

export { GetProducts, CreateProduct, DeleteProduct , UpdateProduct};
