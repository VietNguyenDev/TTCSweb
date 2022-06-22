import express from 'express';

import { createCartItemController } from "../controllers/cartItems/createCartItem.controller.js";
import { getListCartItemController } from "../controllers/cartItems/getListCartItem.controller.js";
import { deleteCartItemsController } from "../controllers/cartItems/deleteCartItems.controller.js";
import { updateCartItemsController } from "../controllers/cartItems/updateCartItems.controller.js";
import { handleError } from "../../helpers/errors";

const apiCartItem = express.Router();
apiCartItem.post('/cartItem', handleError(createCartItemController)); 
apiCartItem.get('/cartItem', handleError(getListCartItemController));
apiCartItem.post('/cartItem/:id', handleError(deleteCartItemsController));
apiCartItem.post('/cartItem/:id', handleError(updateCartItemsController));