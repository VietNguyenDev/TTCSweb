import express from "express";
import { getListOrderDetailController } from "../controllers/Order/getListOrderDetail.controller.js";
import { getListOrderItemsController } from "../controllers/Order/getListOrderItem.controller.js";
import { createOrderDetailController } from "../controllers/Order/createOrderDetail.controller.js";
import { deleteOrderDetailController } from "../controllers/Order/deleteOrderDetail.controller.js";

const apiOrder = express.Router();

apiOrder.get("/order/:orderId/detail", getListOrderDetailController);
apiOrder.get("/order/:orderId/item", getListOrderItemsController);
apiOrder.post("/order/:orderId/detail", createOrderDetailController);
apiOrder.post("/order/:orderDetailId", deleteOrderDetailController);

export default apiOrder;