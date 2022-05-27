import { Model } from 'objection';
import OrderModel from './orderitem.model.js';


class OrderDetailModel extends Model {
  static get tableName() {
    return 'order_detail';
  }

  static get relationMappings() {


    return {
      product: {
        relation: Model.HasManyRelation,
        modelClass: OrderModel,
        join: {
          from: 'order_details.id',
          to: 'order_items.order_details_id',
        },
      },
    };
  }
}

export default OrderDetailModel;