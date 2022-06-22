import { getListCartItemService } from "../../services/cartItem.service.js";

export async function getListCartItemController (req, res) {
    try {
        const cartItems = await getListCartItemService();
        return res.status(200).json(cartItems);
    } catch (error) {
        return res.status(500).send({message: "Error getting cart item"});
    }
}