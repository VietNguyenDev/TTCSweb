import CategoryModel from "../models/category.model.js"


async function getCategoryService() {
  return await CategoryModel.query().select();
}

async function CreateCategoryService({name, descr, create_at, modified_at, deleted_at }) {
  const product = await ProductModel.query().findOne({ id });
  if (product) return abort(400, "Product already exists");
  await ProductModel.query().insert({
    name,
    descr,
    create_at,
    modified_at,
    deleted_at
  });
  return { message: "Product-category created successfully" };
}

async function DeleteCategoryService({ id }) {
  const product = await ProductModel.query().findById(id);
  if (!product) return abort(404, "Product not found");
  await ProductModel.query().deleteById(id);
  return { message: "Product-category deleted successfully" };
}

async function UpdateCategoryService({id, name, descr, create_at, modified_at, deleted_at }) {
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


export {getCategoryService, CreateCategoryService, DeleteCategoryService, UpdateCategoryService} ;
