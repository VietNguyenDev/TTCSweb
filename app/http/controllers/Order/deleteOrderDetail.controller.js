import { deleteOrderDetailService } from "../../services/Order.service.js";

export async function deleteOrderDetailController(req, res) {
    try {
        const orderDetailId = req.params.orderDetailId;
        const result = await deleteOrderDetailService(orderDetailId);
        return res.status(200).send({ message: "Order detail deleted successfully" });
    } catch (error) {
        return res.status(500).send({ message: "Error deleting order detail" });
    }
}