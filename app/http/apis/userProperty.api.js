import express from "express";

import { getListUserPropertyController } from "../controllers/UserProperty/getProperty.controller.js";
import { createUserPropertyController } from "../controllers/UserProperty/createProperty.controller.js";
import { updateUserPropertyController } from "../controllers/UserProperty/updateProperty.controller.js";
import { deleteUserPropertyController } from "../controllers/UserProperty/deleteProperty.controller.js";

const apiUserProperty = express.Router();

apiUserProperty.get("/user/property", getListUserPropertyController);
apiUserProperty.post("/user/property", createUserPropertyController);
apiUserProperty.post("/user/property/:user_id", deleteUserPropertyController);
apiUserProperty.post("/user/property/:user_id", updateUserPropertyController);

export default apiUserProperty;