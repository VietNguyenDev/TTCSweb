import { Model } from 'objection';

class CategoryModel extends Model {
  static get tableName() {
    return 'product_category';
  }
}

export default CategoryModel;