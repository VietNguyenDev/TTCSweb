import Joi from "joi";
import jwt from "jsonwebtoken";
import { abort } from "../../../helpers/errors.js";
import { signInService } from "../../services/auth.service.js";

async function validate (params) {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            password: Joi.string().min(6),
        });

        return await schema.validate(params);
    } catch (error) {
        return abort (400, 'Params Error')
    }
};

export async function signInController(req, res) {
    try {
        const { email, password } = req.body;
        await validate({ email, password });
        const result = await signInService({ email, password });
        const token = jwt.sign({
            username: result.data.username,
        }, process.env.JWT_SECRET, { expiresIn: "3h" });
        return res.status(200).send({message: "User signed in successfully", data: result.data, token});
    } catch (error) {
        res.status(400).send({message: error.message});
    }
    
}

