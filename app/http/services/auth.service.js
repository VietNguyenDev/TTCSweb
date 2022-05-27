import bcrypt from 'bcrypt';

import UserModel from "../models/user.model.js";
import { abort } from "../../helpers/errors.js";

export async function signInService({ email, password }) {
    try {
        const user = await UserModel.query().findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password)))
            return abort(400, 'Invalid email or password');
        return { message: "User signed in successfully", data: user };
    } catch (error) {
        abort(500, error.message);
    }
   
}

export async function signUpService ({ email, username, password }) {
    const findUser = await UserModel.query().findOne({username});

    if (findUser) return abort (400, 'Username is already exist');

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const user = await UserModel.query()
        .insert({
        email,
        username,
        password : hashPassword,
        created_at : new Date(),
        modified_at: new Date()
    })
    return {message: "User created successfully" , data: user};
}


