import UserModel from "../models/user.model.js";
import {abort} from "../../helpers/errors.js";

async function GetUserService() {
    try {
        const users = await UserModel.query().select('id', 'username', 'email', 'first_name', 'last_name', 'telephone', 'created_at', 'modified_at');
        return users;
    } catch (error) {
        return abort(500, error.message);        
    }
}

async function CreateUserService({username,password, role, first_name, last_name, telephone, created_at, modified_at}) {
    const user = await CreateUser.query().findOne({username});
    if (user) return abort(400, "User already exists");
    await UserModel.query().insert({ 
        username, 
        password,
        role,
        first_name,
        last_name,
        telephone,
        created_at,
        modified_at
    });
    return {message: "User created successfully"};
}

async function DeleteUserService({id}) {
    const user = await UserModel.query().findById(id);
    if (!user) return abort(404, "User not found");
    await UserModel.query().deleteById(id);
    return { message: "User deleted successfully"};
}

async function UpdateUserService({id, username,password, role, first_name, last_name, telephone, created_at, modified_at}) {
    const user = await UserModel.query().findById(id);
    if (!user) return abort(404, "User not found");
    await UserModel.query().patchAndFetchById(id, {
        id, 
        username, 
        password,
        role,
        first_name,
        last_name,
        telephone,
        created_at,
        modified_at
    });
    return { message: "User updated successfully" };
}

export {GetUserService, CreateUserService, DeleteUserService, UpdateUserService}