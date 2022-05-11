import { Model } from 'objection';

class ProductModel extends Model {
  static get tableName() {
    return 'product';
  }
}

export default ProductModel;