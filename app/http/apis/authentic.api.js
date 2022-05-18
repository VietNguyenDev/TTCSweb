import express from "express";

import { signInController } from "../controllers/Authentic/signIn.controller.js";
import { signUpController } from "../controllers/Authentic/signUp.controller.js";
const apiAuthentic = express.Router();

apiAuthentic.post('/sign-in',  signInController);
apiAuthentic.post('/sign-up', signUpController);

export default apiAuthentic;