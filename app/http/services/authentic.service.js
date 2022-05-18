import bcrypt from 'bcrypt';

import UserModel from "../models/user.model.js";
import { abort } from "../../helpers/errors.js";

async function signInService ({username, password}) {
    const user = await UserModel.query().findOne('username', username);
    if (!user || !(await bcrypt.compare(password, user.password))) return abort (400, 'username or password is invalid' );
}

async function signUpService ({ username, password, role, first_name, last_name, telephone, created_at, modified_at}) {
    const findUser = await UserModel.query().findOne({username});

    if (findUser) return abort (400, 'Username is already exist');

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const user = await UserModel.query()
    .insert({
        username,
        password,
        role,
        first_name,
        last_name,
        telephone,
        created_at,
        modified_at
    })
    return {message: "User created successfully"};
}



export default {signInService, signUpService};
