import { Model } from "objection";

class ShopSessionModel extends Model {
  static get tableName() {
    return "shopping_session";
  }

  static get relationMappings() {
    return {
        cartItem: {
            relation: Model.HasManyRelation,
            modelClass: cartItem.model,
            join: {
                from: "shopping_session.id",
                to: "cart_item.shopping_session_id"
            }
        },

        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: UserModel,
            join: {
                from: "shopping_session.user_id",
                to: "user.id"
            }
        }
    }
  }
}