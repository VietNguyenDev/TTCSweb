import { Model } from "objection";

class CommentModel extends Model {
  static get tableName() {
    return "comment";
  }

  static get relationMappings() {
    const ProductModel = require("./product.model");
    const UserModel = require("./user.model");
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProductModel,
        join: {
          from: "comment.product_id",
          to: "product.id"
        }
      },

      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
            from: "comment.user_id",
            to: "user.id"
        }
      }
    };
  }
}

export default CommentModel;