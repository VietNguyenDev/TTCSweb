import { getListOrderDetailService } from "../../services/Order.service.js";

export async function getListOrderDetailController(req, res) {
    try {
        const orderId = req.params.orderId;
        const orderDetail = await getListOrderDetailService(orderId);
        if (orderDetail.length > 0) {
            res.status(200).send({
                message: "Order detail list",
                data: orderDetail
            });
        } else {
            res.status(404).send({ message: "Order detail is empty" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};