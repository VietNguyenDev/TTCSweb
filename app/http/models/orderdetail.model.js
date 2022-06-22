import { Model } from "objection";
import OrderModel from "./orderItem.model.js";

class OrderDetailModel extends Model {
  static get tableName() {
    return "order_detail";
  }

  static get relationMappings() {
    return {
      oderItem: {
        relation: Model.HasOneRelation,
        modelClass: OrderModel,
        join: {
          from: "order_details.id",
          to: "order_items.order_details_id",
        },
      },
    };
  }
}

export default OrderDetailModel;
