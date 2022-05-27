import { Model } from 'objection';
import ProductModel from './product.model';

class OrderModel extends Model {
  static get tableName() {
    return 'orders';
  }

  static get relationMappings() {
    return {
      orderDetail: {
        relation: Model.HasOneRelation,
        modelClass: ProductModel,
        join: {
          from: 'order_items.product_id',
          to: 'product.id',
        },
      },
    };
  }
}

export default OrderModel;