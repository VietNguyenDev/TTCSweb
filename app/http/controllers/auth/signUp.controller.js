import Joi from "joi";
import { abort } from "../../../helpers/errors.js";
import { signUpService } from "../../services/auth.service.js";

async function validate (params) {
    try {
      const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(6),
        re_password: Joi.equal(Joi.ref('password')),
      });
  
      return await schema.validate(params);
    } catch (error) {
      return abort(400, 'Params Error');
    }
  };
  
export async function signUpController(req, res) {
  try {
    const { email, password, re_password , username} = req.body;
    await validate({ email, password, re_password });
    const result = await signUpService({ email, password , username});
    return res.status(200).send(result);
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

  