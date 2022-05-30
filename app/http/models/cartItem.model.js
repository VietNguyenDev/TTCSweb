import { Model } from "objection";

class CartItemModel extends Model {
  static get tableName() {
    return 'cart_item';
  }

  static get relationMappings() {
    const ProductModel = require('./product.model');

    return {
        product: {
            relation: Model.BelongsToOneRelation,
            modelClass: ProductModel,
            join: {
                from: 'cart_item.product_id',
                to: 'product.id'
            }
        }
    };
  }
}

export default CartItemModel;
