import { Model } from "objection";
import UserModel from "./user.model.js";

class UserPropertyModel extends Model {
  static get tableName() {
    return "user_address";
  }

  static get relationMappings(){
      return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: UserModel,
                join: {
                    from: "user_address.user_id",
                    to: "user.id"
                }
            }
      }
  }
}

export default UserPropertyModel;