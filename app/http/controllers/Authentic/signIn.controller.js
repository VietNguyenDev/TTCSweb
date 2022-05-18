import Joi from "joi";

import { abort } from "../../../helpers/errors.js";
import signInService from "../../services/authentic.service.js";

async function validate (params) {
    try {
        const schema = Joi.object({
            username: Joi.string()
            .min(3)
            .max(30),
            password: Joi.string().min(6),
            repeat_password: Joi.ref('password'),
        });

        return await schema.validate(params);
    } catch (error) {
        return abort (400, 'Params Error')
    }
};

async function signInController (req, res) {
    const params = {
        username: req.body.username,
        password: req.body.password,
    };

    await validate(params);
    const result = await signInService(params);

    return res.status(200).send(result);
}

export {signInController};