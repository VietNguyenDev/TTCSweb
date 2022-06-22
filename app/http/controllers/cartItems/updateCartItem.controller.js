import { updateCartItemsService } from "../../services/cartItem.service.js";

export async function updateCartItemController (req, res) {
    try{
        const {cart_id, session_id, product_id, quantity} = req.body;
        const {message} = await updateCartItemsService({cart_id, session_id, product_id, quantity});
        return res.status(200).send(message);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
