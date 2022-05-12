import { Model } from 'objection';

class UserModel extends Model {
  static get tableName() {
    return 'user';
  }
}

export default UserModel;