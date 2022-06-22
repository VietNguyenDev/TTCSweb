import { getListOrderItemsService } from "../../services/Order.service.js";

export async function getListOrderItemsController(req, res) {
    try {
        const orderItemId = req.params.orderItemId;
        const orderItem = await getListOrderItemsService(orderItemId);
        let page = req.query.page || 1;
        let limit = req.query.limit || 10;
        const pageCount = Math.ceil(orderItem.length / limit);
        if (page > pageCount) {
            page = pageCount
        }
        const offset = page * limit - limit;
        if (orderItem.length > 0) {
            res.status(200).send({
                message: "Order item list",
                "page": page,
                "pageCount": pageCount,
                "data": orderItem.slice(offset, offset + limit)
            });
        } else {
            res.status(404).send({ message: "Order item is empty" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}