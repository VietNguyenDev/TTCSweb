import express from "express";

import { signInController } from "../controllers/auth/signIn.controller.js";
import { signUpController } from "../controllers/auth/signUp.controller.js";
const apiAuth = express.Router();

apiAuth.post('/sign-in',  signInController);
apiAuth.post('/sign-up', signUpController);

export default apiAuth;