import { Model } from 'objection';

class CategoryModel extends Model {
  static get tableName() {
    return 'prod-category';
  }
}

export default CategoryModel;