import { Model } from 'objection';

class CategoryModel extends Model {
  static get tableName() {
    return 'category';
  }
}

export default CategoryModel;