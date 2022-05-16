import express from "express";
import getListUserController from "../controllers/User/getListUser.controller.js";
import createUserController from "../controllers/User/createUser.controller.js";
import updateUserController from "../controllers/User/updateUser.controller.js";
import DeleteUserController from "../controllers/User/deleteUser.controller.js";
import { handleError } from "../../helpers/errors.js";

const apiUser = express.Router();
apiUser.get('/user', handleError(getListUserController));
apiUser.post('/user', handleError(createUserController));
apiUser.post('/user', handleError(DeleteUserController));
apiUser.post('/user', handleError(updateUserController));

export default apiUser;