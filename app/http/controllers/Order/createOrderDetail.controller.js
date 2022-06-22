import { createOrderDetailService } from "../../services/Order.service.js";

export async function createOrderDetailController(req, res) {
    try {
        const orderDetail = req.body;
        const orderId = req.params.orderId;
        const result = await createOrderDetailService(orderDetail, orderId);

        return res.status(200).send({result});
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}