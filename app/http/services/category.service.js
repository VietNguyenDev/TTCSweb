import CategoryModel from "../models/category.model.js"


async function getProductCategory() {
  return await CategoryModel.query().select();
}

async function CreateCategory({ id, name, descr, create_at, modified_at, deleted_at }) {
  const product = await ProductModel.query().findOne({ id });
  if (product) return abort(400, "Product already exists");
  await ProductModel.query().insert({
    id, 
    name,
    descr,
    create_at,
    modified_at,
    deleted_at
  });
  return { message: "Product-category created successfully" };
}

async function DeleteCategory({ id }) {
  const product = await ProductModel.query().findById(id);
  if (!product) return abort(404, "Product not found");
  await ProductModel.query().deleteById(id);
  return { message: "Product-category deleted successfully" };
}

async function UpdateCategory({id, name, descr, create_at, modified_at, deleted_at }) {
  const product = await ProductModel.query().findById(id);
  if (!product) return abort(404, "Product not found");
  await ProductModel.query().patchAndFetchById(id, {
    id, 
    name,
    descr,
    create_at,
    modified_at,
    deleted_at
  });
  return { message: "Product_category updated successfully" };
}


export {getProductCategory, CreateCategory, DeleteCategory, UpdateCategory} ;
