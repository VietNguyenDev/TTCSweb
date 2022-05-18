import Joi from "joi";

import { abort } from "../../../helpers/errors.js";
import authentic from "../../services/authentic.service.js";

async function validate (params) {
    try {
      const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(6),
        passwordConfirmation: Joi.equal(Joi.ref('password')),
      });
  
      return await schema.validate(params);
    } catch (error) {
      return abort(400, 'Params Error');
    }
  };
  
async function signUpController (req, res) {
   const params = {
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation,
    };
    
    await validate(params);
    const result = await authentic.signUp(params);
    return res.status(200).send(result);
  };

export {signUpController}
  