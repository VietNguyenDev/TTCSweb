import { Model } from "objection";
import ProductModel from "./product.model.js";

class OrderItemsModel extends Model {
  static get tableName() {
    return "orders";
  }

  static get relationMappings() {
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProductModel,
        join: {
          from: "order_items.product_id",
          to: "product.id",
        },
      },
    };
  }
}

export default OrderItemsModel;
