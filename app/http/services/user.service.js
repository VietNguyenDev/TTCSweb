import UserModel from "../models/user.model.js";
import {abort} from "../../helpers/errors.js";

async function GetUser() {
    return await UserModel.query().select();
}

async function CreateUser({id, username,password, first_name, last_name, telephone, created_at, modified_at}) {
    const user = await CreateUser.query().findOne({username});
    if (user) return abort(400, "User already exists");
    await UserModel.query().insert({
        id, 
        username, 
        password,
        first_name,
        last_name,
        telephone,
        created_at,
        modified_at
    });
    return {message: "User created successfully"};
}

async function DeleteUser({id}) {
    const user = await UserModel.query().findById(id);
    if (!user) return abort(404, "User not found");
    await UserModel.query().deleteById(id);
    return { message: "User deleted successfully"};
}

async function UpdateUser({id, username,password, first_name, last_name, telephone, created_at, modified_at}) {
    const user = await UserModel.query().findById(id);
    if (!user) return abort(404, "User not found");
    await UserModel.query().patchAndFetchById(id, {
        id, 
        username, 
        password,
        first_name,
        last_name,
        telephone,
        created_at,
        modified_at
    });
    return { message: "User updated successfully" };
}

export {GetUser, CreateUser, DeleteUser, UpdateUser}